import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import meditationImages from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'

const meditate = () => {
  return (
    <View className='flex-1'>
        <ImageBackground 
            source={meditationImages[0]}
            resizeMode='cover'
            className='flex-1'
        >

        </ImageBackground>
    </View>
  )
}

export default meditate

const styles = StyleSheet.create({})