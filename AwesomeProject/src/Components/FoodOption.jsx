import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FoodOption = ({ isSelected, text }) => {
  return (
    <View style={[styles.optionContainer, isSelected ? styles.dark : styles.light]}>
      <Text style={[isSelected ? styles.textDark : styles.textLight, 
        {textAlign: 'center', paddingTop: 6, fontWeight: 'bold'} ]}>{text}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    padding: 10,
    marginRight: 10,
    borderRadius: 15,
    borderWidth: 0.3,
    width: 120,
    minHeight: 60,

  },
  dark: {
    backgroundColor: '#21b2b2',
  },
  light: {},
  textDark: {
    color: 'white',
  },
  textLight: {
    color: '#c8c8c8',
  },
});

export default FoodOption;
