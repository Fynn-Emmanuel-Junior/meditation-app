import { StyleSheet, Text, View,ImageBackground, Pressable } from 'react-native'
import React,{useState,useEffect, useContext} from 'react'
import meditationImages from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter,useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import {Audio} from 'expo-av';
import { MEDITATION_DATA,AUDIO_FILES } from '@/constants/MeditationData';
import { TimeContext } from '@/context/TimerContext';

const meditate = () => {
    const router = useRouter();
    const { duration: secondsRemaining,setDuration} = useContext(TimeContext);
    const {id} = useLocalSearchParams();
    // const [secondsRemaining,setSecondsRemaining] = useState(30);
    const [isMeditating,setMeditating] = useState(false);
    const [audio,setAudio] = useState<Audio.Sound>();
    const [isPlayingAudio,setPlayingAudio] = useState(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        // Exit
        if(secondsRemaining === 0) {
            setMeditating(false);
            return;
        }

        if(isMeditating){
            timerId = setTimeout(() => {
                setDuration(secondsRemaining - 1);
            },1000);
        }


        return () => {
            clearTimeout(timerId);
        }

    },[secondsRemaining,isMeditating]);

    useEffect(() => {
        return () => {
            audio?.unloadAsync();
        }
    },[audio])

    const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2,"0");
    const formattedTimeSeconds = String(Math.floor(secondsRemaining % 60)).padStart(2,"0");

    const toggleMeditationSessionStatus = async() => {
        if( secondsRemaining === 0) setDuration(30);
        setMeditating(!isMeditating);

        await toggleSound();
    }

    const toggleSound = async() => {
        const sound = audio ? audio : await initializeSound();  
        
        const status = await sound?.getStatusAsync();

        if(status?.isLoaded && isPlayingAudio) {
            await sound.playAsync();
            setPlayingAudio(true);
        } else {
            await sound.pauseAsync();
            setPlayingAudio(false);
        }
    }

    const initializeSound = async() => {
        const audioFileName = MEDITATION_DATA[Number(id) -1].audio;
        const {sound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audioFileName]
        ); 

        setAudio(sound);
        return sound;
    }

    const handleAdjustMeditationDuration = () => {
        if(isMeditating) toggleMeditationSessionStatus();
        router.push("/(modal)/adjustMeditationDuration");
    }

  return (
    <View className='flex-1'>
        <ImageBackground 
            source={meditationImages[Number(id) - 1]}
            resizeMode='cover'
            className='flex-1'
        >
            <AppGradient
                colors={['transparent','rgba(0,0,0,0.8)']}
            >
                <Pressable
                    onPress={() => router.back()}
                    className='absolute top-16 left-6 z-10' 
                >
                    <AntDesign name="leftcircleo" size={40} color="white" />
                </Pressable>
                <View
                    className='flex-1 justify-center'
                >
                    <View 
                        className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'
                    >
                        <Text className='text-center text-4xl text-blue-800 font-rmono'> {formattedTimeMinutes}:{formattedTimeSeconds}</Text>
                    </View>
                </View>
                <View
                    className='mb-5'
                >
                    <CustomButton 
                        title='Adjust duration'
                        onPress={handleAdjustMeditationDuration}
                    />
                    <CustomButton 
                        title={isMeditating ? 'Stop' : 'Start Medatiting'}
                        onPress={toggleMeditationSessionStatus}
                        containerStyles=''
                    />
                </View>
            </AppGradient>
        </ImageBackground>
    </View>
  )
}

export default meditate

const styles = StyleSheet.create({})