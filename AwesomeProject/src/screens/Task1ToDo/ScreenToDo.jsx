import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LIGHTBLUE2 } from "../../constants/colors";
import Todo1 from "../../components/Todo1";
import TodoInput from "../../components/TodoInput";
import CustomButton from "../../components/CustomButton";
import Constants from "expo-constants";
import { ScrollView } from "react-native";

let conta = 0

const ScreenToDo = () => {

    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    

    const handleAddTodo = () => {
    console.log('Entro a la funcion')
    // if (inputValue === '') return;
    setTodos([
        ...todos,
        {
        id: conta,
        name: inputValue,
        isCompleted: false,
        },
    ]);
    setInputValue('');
     conta++
     console.log(todos)
    };

    return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={{justifyItems:"center", paddingHorizontal: 10, paddingTop: 10}}>
            <Text style={{fontSize: 40, fontWeight:"bold", textAlign: "center", color: 'green' }}>
                To do List
            </Text>

            <View style={{flexDirection:"row", marginTop: 20, gap: 20}}>
            <TodoInput
                value={inputValue}
                onChangeText={(value) => setInputValue(value)}
            />
            <CustomButton text='Add task' onPress={handleAddTodo} />
            </View>

            <ScrollView>
                <FlatList
                data={todos} 
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={(({item: {id, name, isCompleted} }) =>
                    <Todo1 name={name} id={id} isDone={isCompleted} />
                )}
                />
            </ScrollView>
            

        </View>
    </View>


    )
}

export default ScreenToDo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHTBLUE2,
        padding: 10,
        paddingTop: Constants.statusBarHeight + 20,
    },

})