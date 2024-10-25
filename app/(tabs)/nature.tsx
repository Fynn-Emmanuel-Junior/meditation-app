import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const Nature = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={['#161b2e','#0a4d4a','#766e67']}>
            <Text className=''>nature</Text>
        </AppGradient>
    </View>
  )
}

export default Nature

const styles = StyleSheet.create({})