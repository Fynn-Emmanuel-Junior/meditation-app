import { StyleSheet, Text, View,Pressable, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { TimeContext } from '@/context/TimerContext';

const adjustMeditationDuration = () => {
    const {setDuration} = useContext(TimeContext);

    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    }
  return (
    <View className='flex-1 relative'>
        <AppGradient 
            colors={['#161b2e','#0a4d4a','#766e67']}
        >
            <Pressable
                onPress={() => router.back()}
                className='absolute top-8 left-6 z-10' 
            >
                <AntDesign name="leftcircleo" size={40} color="white" />
            </Pressable>
            <View className="justify-center mt-10 h-[20%]">
                <Text className='text-center font-bold text-white text-3xl'> Adjust your meditation duration </Text>
            </View>
            <View>
                <CustomButton  
                    title='10 seconds'
                    onPress={() => handlePress(10)}
                    containerStyles='mb-4'
                />
                <CustomButton  
                    title='5 minutes'
                    onPress={() => handlePress(5 * 60)}
                    containerStyles='mb-4'
                />
                <CustomButton  
                    title='10 minutes'
                    onPress={() => handlePress(10 * 60)}
                    containerStyles='mb-4'
                />
                <CustomButton  
                    title='15 minutes'
                    onPress={() => handlePress(15 * 60)}
                    containerStyles='mb-4'
                />
            </View>
        </AppGradient>
    </View>
  )
}

export default adjustMeditationDuration

const styles = StyleSheet.create({})