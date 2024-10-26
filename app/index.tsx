import { StyleSheet, Text, View,ImageBackground,SafeAreaView } from 'react-native'
import React from 'react'
import beachImage from '../assets/meditation-images/beach.webp';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from 'expo-status-bar';
import '../global.css'
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';


const App = () => {
  const router = useRouter();
  return (
    <View className='flex-1'>
      <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'>
        <AppGradient colors={["rgba(0,0,0,0.4)","rgba(0,0,0,0.8)"]}>
        <SafeAreaView className='flex-1 px-1 justify-between'>
            <View style={styles.header}>
              <Text className='text-center text-white font-bold text-4xl'> Simple Meditation</Text>
              <Text className='text-center text-white text-regular text-2xl mt-3'>
                Simplifying Meditation for everyone
              </Text>
            </View>
            <View>
              <CustomButton 
                title='Get Started'
                onPress={() => router.push("/nature")}
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      <StatusBar style='light' />
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  header: {
    marginTop: 30
  }
})


