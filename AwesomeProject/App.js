import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";
import Constants from "expo-constants";
import { FlatList } from "react-native";
import Todo1 from "./src/components/Todo1";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";

//Unidad 2 practica 2 
//Unidad 2 tarea 2: hacer el editar 
export default function App() {

// console.log(React.useState(), 'With React')

const [inputValue, setInputValue] = useState('');
const [todos, setTodos] = useState([]);

const createTwoButtonAlert = (error) =>
    Alert.alert(
      'Error ',
      error, [
      {text: 'Aceptar',},
    ]);

const handleAddTodo = () => {
  console.log('Entro a la funcion')
  if (inputValue === '') return createTwoButtonAlert(
    'debes ingresar un nombre a la tarea'
  )

  const existingTodo = todos.some(
      todo => todo.name.toLowerCase() === inputValue.toLowerCase()
  )

  if(existingTodo) return createTwoButtonAlert(
    'ya existe una tarea con ese nombre'
  )
   
  setTodos([
    ...todos,
    {
      id: new Date().toISOString(),
      name: inputValue,
      isCompleted: false,
    },
  ]);
  setInputValue('');
};

  const handleDeleteTodo = (todoId) => {
      const filteredArray = todos.filter(
      todo => todo.id !== todoId
    )

    
  }

  const handleCompletedTodo = (todoId) => {
    const mappedArray = todos.map(todo => {
      if(todo.id === todoId){
        return {
          ...todo, 
          isCompleted: true
        }
      }
    })
  }



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{justifyItems:"center", paddingHorizontal: 20, paddingTop: 10}}>
        <Text style={{fontSize: 40, fontWeight:"bold", textAlign: "center", color: 'white' }}>
            To do List
        </Text>

        <View style={{flexDirection:"row", marginTop: 20, gap: 20}}>
          <TodoInput
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
          />
          <CustomButton text='Add task' onPress={handleAddTodo} />
        </View>

        <FlatList
          data={todos} 
          keyExtractor={(item) => item.id}
          renderItem={(({item: {name, id, handleCompletedTodo, handleDeleteTodo} }) =>
            <Todo1 name={name} id={id} handleDelete={handleDeleteTodo} isCompleted ={handleCompletedTodo} />
          )}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a6355",
    paddingTop: Constants.statusBarHeight + 10,
    padding: 15,
  },
});
