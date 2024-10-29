import { Slot,SplashScreen,Stack } from "expo-router";
import '../global.css';
import {useFonts} from 'expo-font';
import React,{useEffect} from "react";
import TimerProvider from "@/context/TimerContext";

//Prevent Splasj screen from auto hiding
SplashScreen.preventAutoHideAsync();

export default function  RootLayout() {
    const [fontsLoaded,error] = useFonts({
        'Roboto-Mono': require('../assets/fonts/RobotoMono-Regular.ttf')
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);
    
    if (!fontsLoaded) {
        return null; // Prevent rendering if fonts aren't loaded yet
    }

    return (
        <TimerProvider>
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
                <Stack.Screen 
                    name="(modal)/adjustMeditationDuration"
                    options={{headerShown: false, presentation: "modal"}}
                />
            </Stack>
        </TimerProvider>
    )
}