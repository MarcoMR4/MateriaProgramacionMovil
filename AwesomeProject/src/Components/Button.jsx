import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ text, rol, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        rol === "number" ? styles.numberContainer : styles.operatorContainer,
        text === "0" ? styles.zeroContainer : styles.noZeroContainer,
      ]}
      onPress={() => onPress(text)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  zeroContainer: {
    width: 150,
  },
  noZeroContainer: {
    width: 70,
  },
  numberContainer: {
    backgroundColor: "#454DF0",
  },
  operatorContainer: {
    backgroundColor: "silver",
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});