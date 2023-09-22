
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
import InfoModal from "./src/components/InfoModal";
import CustomButtonText from "./src/components/CustomButtonText";
import { FontAwesome5 } from '@expo/vector-icons';

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
  info,
  seeModal,
  setSeeModal,
  handleInfo
} = useTodos()



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{justifyItems:"center", paddingHorizontal: 20, paddingTop: 10}}>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent: "space-around"}}>
          <Text style={{
            fontSize: 40, 
            fontWeight:"bold", 
            textAlign: "center", 
            color: 'white', 
            marginBottom: 15,
          }}>
              To do List
          </Text>
          <FontAwesome5 name="tasks" size={35} color="silver" />
        </View>

        <View style={{flexDirection:"row", marginTop: 20, gap: 20}}>
          <TodoInput
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
          />
          <CustomButtonText
           text= {(editMode ? 'Edit task' : 'Add task' )}
           onPress={handleAddTodo}
           />
        </View>

        <View>
          <InfoModal info={info} seeModal={seeModal} setSeeModal={setSeeModal}/>
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
              handleInfo={handleInfo}
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
    backgroundColor: "#077974",
    paddingTop: Constants.statusBarHeight + 10,
    padding: 15,
  },
});
