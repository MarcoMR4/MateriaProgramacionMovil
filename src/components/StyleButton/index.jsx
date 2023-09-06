import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomTouchable = ({
  children,
  onPress,
  style,
  activeOpacity,
  text,
  textStyle,
  ...restProps
}) => {
  const combinedStyles = StyleSheet.flatten([styles.defaultTouchable, style]);

  return (
    <TouchableOpacity
      style={combinedStyles}
      onPress={onPress}
      activeOpacity={activeOpacity}
      {...restProps}
    >
      <Text style={[styles.defaultText, textStyle]}>{text || children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultTouchable: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  defaultText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CustomTouchable;