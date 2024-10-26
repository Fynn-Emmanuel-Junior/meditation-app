import { StyleSheet, Text, View,ImageBackground, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams,router } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  console.log(itemId);

  const [affirmation, setAffirmation] = useState<GalleryPreviewData | null>(null);

  useEffect(() => {
    const fetchAffirmation = () => {
      // Find the affirmation that matches the itemId
      const foundAffirmation = AFFIRMATION_GALLERY.flatMap(g => g.data).find(
        (a) => a.id === parseInt(itemId as string)
      );
      setAffirmation(foundAffirmation || null); // Update the state only once
    };

    fetchAffirmation();
  }, [itemId]);

  console.log(affirmation);

  return (
    <View className='flex-1'>
      <ImageBackground 
        source={affirmation?.image}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={['rgba(0,0,0,0.3)','rgba(0,0,0,0.9)']}>
          <Pressable 
            onPress={() => router.back()}
            className='absolute top-16 left-6'
          >
            <AntDesign name="leftcircleo" size={40} color="white" />
          </Pressable>
          <ScrollView
            className='mt-20'
            showsVerticalScrollIndicator={false}
          >
            <View className='h-full justify-center'>
              <View className='h-4/5 justify-center'>
                <Text>{affirmation?.text}</Text>

              </View>
            </View>

          </ScrollView>
        </AppGradient>
      </ImageBackground>
      <StatusBar style='light'/>
    </View>
  );
};

export default AffirmationPractice;

const styles = StyleSheet.create({});
