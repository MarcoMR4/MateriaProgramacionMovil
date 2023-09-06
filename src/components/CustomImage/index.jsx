import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CustomImage = ({ source, imageStyle }) => {
  return <Image source={source} style={[styles.image, imageStyle]} />;
};

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
});

export default CustomImage;