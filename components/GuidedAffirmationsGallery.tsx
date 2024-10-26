import { StyleSheet, Text, View,FlatList, Pressable,Image } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';

interface GuidedAffirmationsGalleryProps {
    title: string;
    previews: GalleryPreviewData[];

}

const GuidedAffirmationsGallery = ({title,previews}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className='my-5' style={styles.main}>
        <View className='mb-2'>
            <Text className='text-white font-bold text-xl' style={{marginLeft: 8}}>{title}</Text>
        </View>
        <View className='' style={styles.container}>
            <FlatList 
                data={previews}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>(
                    <Link href={`/affirmations/${item.id}`} asChild>
                        <Pressable>
                            <View className='' style={styles.carousel}>
                                <Image 
                                    source={item.image} 
                                    resizeMode='cover' 
                                    style={{width: '100%', height: '100%',borderRadius: 5}}
                                />
                            </View>
                        </Pressable>
                    </Link>
                )}

                horizontal
            />
        </View>
    </View>
  )
}

export default GuidedAffirmationsGallery

const styles = StyleSheet.create({
    main: {
        marginHorizontal: 0
    },
    container: {
        margin: 10
    },
    carousel: {
        width: 128,
        height: 144,
        marginRight: 10,
    }
})