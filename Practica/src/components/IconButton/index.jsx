import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomIconButton = ({
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
    borderWidth: 1,
    borderBlockColor: THEME.COLORS.GRAY,
    width: 10,
    flex: 1,
    flexDirection: 'row',
    padding: 7,
    justifyContent: 'space-evenly',
    borderRadius: 10
  },
  defaultText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default CustomIconButton;