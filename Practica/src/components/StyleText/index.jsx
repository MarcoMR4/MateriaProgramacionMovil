import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({
  children,
  style,
  fontSize,
  color,
  fontWeight,
  ...restProps
}) => {
  const combinedStyles = StyleSheet.flatten([
    styles.defaultText,
    { fontSize, color, fontWeight },
    style,
  ]);

  return (
    <Text style={combinedStyles} {...restProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
  },
});

export default CustomText;