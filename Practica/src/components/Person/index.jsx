import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { THEME } from "../../theme/colors";


const {GREEN, GRAY, CREMITA, INDIGUILLO} = THEME.COLORS


const Person = ({ nombre, apellido, index, image }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: index % 2 === 0 ? "blue" : "red",
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: CREMITA, 
        width: '45%',
        height: 80,
      }}
    >
      <Image 
        source = {image} 
        style = {{width: 60, height: 60, borderRadius: 50}}
      />
      <View style = {{flex: 1, flexDirection: 'column'}}>
        <Text style={{ fontSize: 13, color: INDIGUILLO}}>{nombre} </Text>
        <Text style={{ fontSize: 13 }}>{apellido}</Text>
      </View>
      
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({});