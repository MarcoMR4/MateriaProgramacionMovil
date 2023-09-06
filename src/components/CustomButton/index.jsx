import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderBlockColor: THEME.COLORS.GRAY,
    width: 120,
    height: 40,
    flexDirection: 'row',
    padding: 7,
    justifyContent: 'space-evenly',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: 'black',
  },
});

export default CustomButton;
