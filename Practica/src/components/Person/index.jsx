import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { THEME } from "../../theme/colors";

const verde = THEME.COLORS.GREEN

const Person = ({ nombre, apellido, index }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: index % 2 === 0 ? "blue" : "red",
      }}
    >
      <Text style={{ fontSize: 30, color: verde}}>{nombre}</Text>
      <Text style={{ fontSize: 20 }}>{apellido}</Text>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({});