import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View, Text
} from "react-native";
import Constants from "expo-constants";
import React from 'react'
import Card2 from "./src/components/Card2";
import AppContextProvider from "./src/context/AppContext";


//Unidad 2 practica 9 utilizando muchos componentes para mostrar informacion 
//Uso del hook: useContext 
//Tarea useColorSkin de Appareance 

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <Card2 />
      </View>
        
    </AppContextProvider>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
});
