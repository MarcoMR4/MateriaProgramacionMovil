import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const IconButtonP = ({
  buttonStyle,
  title,
  ...restProps
}) => {

  return (
    <TouchableOpacity
      style = {[styles.defaultTouchable, buttonStyle]}
      {...restProps}
    >
   
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

export default IconButtonP;