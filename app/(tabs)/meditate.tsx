import { StyleSheet, Text, View,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import meditationImages from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';

const meditate = () => {
  return (
    <View className='flex-1'>
        <ImageBackground 
            source={meditationImages[0]}
            resizeMode='cover'
            className='flex-1'
        >
            <AppGradient
                colors={['transparent','rgba(0,0,0,0.8)']}
            >
                <Pressable>

                </Pressable>
            </AppGradient>
        </ImageBackground>
    </View>
  )
}

export default meditate

const styles = StyleSheet.create({})