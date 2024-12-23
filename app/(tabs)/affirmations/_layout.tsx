import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
      <Stack.Screen name='[itemId]' options={{headerShown: false}}/>
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})