import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const TabsLayout = () => {
  return (
   <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
            fontSize: 13, // Increase the font size here
            fontWeight: 'semibold', // Optional: bold text
        }
    }}
    >
        <Tabs.Screen
           name="nature"
           options={{
            tabBarLabel: "Meditate",
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="flower-tulip" size={24} color={color} />
            )
        }}
        />
        <Tabs.Screen
           name="affirmations"
           options={{
            tabBarLabel: "Affirmations",
            tabBarIcon: ({color}) => (
                <Entypo name="open-book" size={24} color={color} />
            ),
  
        }}
        />
   </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})