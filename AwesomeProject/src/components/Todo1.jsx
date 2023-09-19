import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";

const Todo1 = ({ id, name, handleDelete, isCompleted, handleCompleted }) => {
    return (
        <View style={[
            styles.container, 
            isCompleted && styles.todoCompleted,
        ]}>
            <Text style={{fontSize:15, fontWeight: "bold", color:'white'}}>
                {name}
            </Text>
            <View style={{flexDirection:"row", gap: 10}}>
                <CustomButton text='Delete' light onPress={() => handleDelete(id)}/>
                <CustomButton text='Edit' light />
                <CustomButton text = {isCompleted ? 'Done' : 'Complete'}
                light
                onPress={() => handleCompleted(id)}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        marginTop: 30,
        justifyContent: "space-evenly", 
        padding: 5, 
        borderRadius: 5, 
         backgroundColor: '#2d705f',
        borderColor: 'white',
    }, 
    todoCompleted: {
        backgroundColor: '#3DB935',
    }, 
    todoName: {
        fontSize: 20,
    }


})

export default Todo1