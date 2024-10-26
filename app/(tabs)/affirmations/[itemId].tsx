import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';

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
    <View>
      <Text>{itemId}</Text>
    </View>
  );
};

export default AffirmationPractice;

const styles = StyleSheet.create({});
