import { StyleSheet, Text, View, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

interface Props {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton: React.FC<Props> = ({ onPress, title, textStyles="", containerStyles="" }) => {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
        onPress={onPress}
    >
      <Text
        className={`font-semibold  text-lg ${textStyles}`}
      >{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
