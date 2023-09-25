import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View, Text
} from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from '@react-navigation/stack';
import Router from "./src/Routes/Router";
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';


//Unidad 2 practica 5: Navegacion entre pantallas  
/*
Ejemplos de librerias de navegacion: 
  1. React router -> native router 
  2. 
*/


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
     <View style={styles.container}>
              <Router />
              <StatusBar style="auto" />  
      </View>
    </NavigationContainer>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});
