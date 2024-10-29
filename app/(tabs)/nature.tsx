import { StyleSheet, Text, View,FlatList,Pressable, ImageBackground } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import { StatusBar } from 'expo-status-bar';
import {MEDITATION_DATA} from '@/constants/MeditationData';
import MEDITATION_IMAGE from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const Nature = () => {
    const router = useRouter();
  return (
    <View className='flex-1'>
        <AppGradient colors={['#161b2e','#0a4d4a','#766e67']}>
            <View className='mb-6 mt-5 ml-3'>
                <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>
                    Welcome Fynn
                </Text>
                <Text className='text-indigo-100 text-xl font-medium'>
                    Start your meditation practice today
                </Text>
            </View>
            <View>
                <FlatList 
                    data={MEDITATION_DATA}
                    className='mb-20'
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Pressable 
                            onPress={() => router.push(`/meditate/${item.id.toString()}`)}
                            className='h-48 my-3  mx-4 rounded-md overflow-hidden'
                        >
                            <ImageBackground
                                source={MEDITATION_IMAGE[item.id - 1]}
                                resizeMode='cover'
                                className='flex-1 justify-center rounded-lg'
                            >
                                <LinearGradient 
                                    colors={["transparent","rgba(0,0,0,0.8)"]}
                                    style={styles.linear_gradient}
                                >
                                    <Text
                                        className='text-gray-100 text-center text-3xl font-bold'
                                    >
                                        {item.title}
                                    </Text>
                                </LinearGradient>
                            </ImageBackground>
                        </Pressable>
                    )}
                />
            </View>
        </AppGradient> 
        <StatusBar style='light'/>
    </View>
  )
}

export default Nature

const styles = StyleSheet.create({
    linear_gradient: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})