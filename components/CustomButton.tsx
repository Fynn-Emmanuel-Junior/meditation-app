import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import '../global.css'

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
        style={styles.container}
    >
      <Text
        className={`font-semibold text-lg ${textStyles}`}
        style={styles.text}
      >{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 7,
    marginBottom: 30,
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  text: {
    fontSize: 20,
    fontWeight: 'semibold'
  }
});
