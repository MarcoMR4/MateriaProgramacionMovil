import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import WelcomeBack from "./src/screens/Task9/WelcomeBack";


//Hooks
//Custom hooks, hooks personalizables

export default function App() {

  /*
  const [state, setState] = useState({
    nombre: 'Marco', 
    edad: 23,
    ciudad: 'Morelia', 
    chido: true,
  })
  */

  const [state, setState] = useState(1)

  const [inputValue, setInputValue] = useState('Default value')

  console.log(React.useState(), 'With React')
  console.log(React)

  //  console.log(state[0],'**STATE 0**')
  //  console.log(state[1],'**STATE 1**')

  
 
  const sumValue = (value1) => setState(state + value1)
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/*<WelcomeBack />*/}
      <Text>{JSON.stringify(state)}</Text>


      <TouchableOpacity onPress={() => sumValue(10)}>
        <Text>Change value</Text>
      </TouchableOpacity>


    
      <TextInput
        value={inputValue}
        style = {{borderWidth:1, borderColor: 'black'}}
        onChangeText={(value => setInputValue(value))}


      />


      <Text>
        {inputValue}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
});
