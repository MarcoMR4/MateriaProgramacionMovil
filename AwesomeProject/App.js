
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
import { useTodos } from "./src/Hooks/useTodos";

//Unidad 2 practica 3: estructuras carpetas para hooks y helpers o utils

export default function App() {

const {
  inputValue,
  todos,
  handleAddTodo,
  handleCompletedTodo, 
  handleEditTodo, 
  editMode,
  setInputValue,
  handleDeleteTodo,
} = useTodos()



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
