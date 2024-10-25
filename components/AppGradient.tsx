import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Content from './Content'

const AppGradient = ({children,colors}: {children: any, colors: string[]}) => {
  return (
    <LinearGradient colors={colors} className='flex-1' style={{width: "100%", height: "100%"}}>
      <Content>{children}</Content>
    </LinearGradient>
  )
}

export default AppGradient

const styles = StyleSheet.create({})