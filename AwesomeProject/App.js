import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View, Text
} from "react-native";
import Constants from "expo-constants";
import React from 'react'
import Router from "./src/Routes/Router";


//Unidad 2 practica 9 utilizando muchos componentes para mostrar informacion 
//Uso del hook: useContext 
//Tarea useColorSkin de Appareance 

export default function App() {
  return (
    <AppContext.Provider>
      <View>

      </View>
    </AppContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});
