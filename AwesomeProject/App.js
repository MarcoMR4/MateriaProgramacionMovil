import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import { FlatList } from "react-native";
import Todo1 from "./src/components/Todo1";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";


export default function App() {

// console.log(React.useState(), 'With React')

const [inputValue, setInputValue] = useState('');
const [todos, setTodos] = useState([]);

const handleAddTodo = () => {
  console.log('Entro a la funcion')
  // if (inputValue === '') return;
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
          renderItem={(({item: {name} }) =>
            <Todo1 name={name} />
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
