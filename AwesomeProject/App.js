import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View, Text
} from "react-native";
import Constants from "expo-constants";
import React from 'react'
import Router from "./src/Routes/Router";

//Unidad 2 practica 6: Uso de header customizable 
//unidad2/tarea6: replicar el ejemplo de 2 pantallas con 1 customHeader 

export default function App() {
  return (
    <View style={styles.container}>
      <Router />
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});
