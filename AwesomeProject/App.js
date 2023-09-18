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
import { FlatList } from "react-native-web";
import ToDo from "./src/components/ToDo";


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


  console.log(React.useState(), 'With React')
  console.log(React)

  //  console.log(state[0],'**STATE 0**')
  //  console.log(state[1],'**STATE 1**')
 
  const sumValue = (value1) => setState(state + value1)

  const TODOS = [
    {id: 1, name: "Task1", isCompleted: false},
    {id: 2, name: "Task2", isCompleted: false},
    {id: 3, name: "Task3", isCompleted: false},
  ]

  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = () => {
    if (inputValue === '') return

    setTodos = ([
      ...todos,
      {
        id: new Date().toISOString(),
        name: inputValue,
        isCompleted: false
      }
    ])
    setInputValue('')
  }





  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/*<WelcomeBack />*/}
      <Text>{JSON.stringify(state)}</Text>


      <TouchableOpacity onPress={() => sumValue(10)}>
        <Text>Change value</Text>
      </TouchableOpacity>


      <Text>
        {inputValue}
      </Text>

      <View style={{justifyItems:"center"}}>

        <Text style={{fontSize: 30, marginTop: 30, fontWeight:"bold" }}>
            To do List
        </Text>

        <View style={{flexDirection:"row", paddingHorizontal: 10, gap: 10}}>
          <TextInput
            value={inputValue}
            style = {{borderWidth:1, borderColor: 'black', flex: 1}}
            onChangeText={(value => setInputValue(value))}
          />

          <TouchableOpacity style={{
            borderWidth: 1, 
            alignContent: "center", 
            justifyContent: "center",
          }}>
            <Text>Agregar</Text>
          </TouchableOpacity>

        </View>

        <FlatList
          data = {TODOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item:  {name } }) => (
            <ToDo
              name={name} 
            />
          )}
        
        />

        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight + 10,
    padding: 30,
  },
});
