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
const [editMode, setEditMode] = useState(false);
const [editTodoId, setEditTodoId] = useState(null);

const createTwoButtonAlert = (error) =>
    Alert.alert(
      'Error ',
      error, [
      {text: 'Aceptar',},
    ]);

const handleAddTodo = () => {
  if (inputValue === '') return createTwoButtonAlert(
    'Debes ingresar un nombre a la tarea'
  )
  
  const existingTodo = todos.some(
    todo => todo.name.toLowerCase() === inputValue.toLowerCase()
  )
  
  if(existingTodo) return createTwoButtonAlert(
    'Ya existe una tarea con ese nombre'
  )
     
  if (editMode) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editTodoId) {
        return {
          ...todo,
          name: inputValue,
          date: 'Updated on ' + new Date().toISOString(),
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditMode(false);
    setEditTodoId(null);
    } else {
      setTodos([
       ...todos,
        {
          id: new Date().toISOString(),
          name: inputValue,
          isCompleted: false,
          date: '',
        },
      ]);
    }
  setInputValue('');
};

  const handleDeleteTodo = (todoId) => {
      const filteredArray = todos.filter(
      (todo) => todo.id !== todoId
    )
    setTodos(filteredArray)  
  }

  const handleCompletedTodo = (todoId) => {
    const mappedArray = todos.map(todo => {
      if(todo.id === todoId){
        return {
          ...todo, 
          isCompleted: todo.isCompleted ? false : true
        }
      }
      return todo;
    })
    setTodos(mappedArray)
  }

  const handleEditTodo = (todoId) => {
    setEditMode(true);
    setEditTodoId(todoId);
    const todoToEdit = todos.find((todo) => todo.id === todoId);
    if (todoToEdit) {
      setInputValue(todoToEdit.name);
    }
  };


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
          <CustomButton
           text= {(editMode ? 'Edit task' : 'Add task' )}
           onPress={handleAddTodo}
           />
        </View>

        <FlatList
          data={todos} 
          keyExtractor={(item) => item.id}
          renderItem={(({item: {name, id, isCompleted, date} }) =>
            <Todo1 
              name={name} 
              id={id} 
              handleDelete={handleDeleteTodo} 
              isCompleted ={isCompleted}
              handleCompleted ={handleCompletedTodo} 
              handleEdit={handleEditTodo}
              date={date}
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
    backgroundColor: "#2a6355",
    paddingTop: Constants.statusBarHeight + 10,
    padding: 15,
  },
});
