import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";

const Todo1 = ({ id, name, handleDelete, isCompleted }) => {
    return (
        <View style={[
            styles.container, 
            isCompleted && styles.todoCompleted,
        ]}>
            <Text style={{fontSize:20, fontWeight: "bold", color:'white'}}>
                {name}
            </Text>
            <View style={{flexDirection:"row", gap: 20}}>
                <CustomButton text='Delete' light onPress={handleDelete(id)}/>
                <CustomButton text='Edit' light />
                <CustomButton text = {isCompleted ? 'done' : 'complete'}
                light
                onPress={isCompleted}
                />

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        marginTop: 30,
        justifyContent: "space-around", 
        padding: 12, 
        borderRadius: 5, 
       backgroundColor: '#2d705f',
        borderColor: 'white',
    }, 
    todoCompleted: {
        backgroundColor: '#2d704f',
    }, 
    todoName: {
        fontSize: 20,

    }


})

export default Todo1