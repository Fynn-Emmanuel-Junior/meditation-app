import { Slot,SplashScreen,Stack } from "expo-router";
import '../global.css';
import {useFonts} from 'expo-font';
import React,{useEffect} from "react";

//Prevent Splasj screen from auto hiding
SplashScreen.preventAutoHideAsync();

export default function  RootLayout() {
    const [fontsLoaded,error] = useFonts({
        'Poppins': require('../assets/fonts/RobotoMono-Regular.ttf')
    });

    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    },[fontsLoaded, error]);

    if(!error) return null;
    if(!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen 
                name="(tabs)"
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="meditate/[id]"
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="index"
                options={{headerShown: false}}
            />
        </Stack>
    )
}