import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";

const Todo1 = ({ id, name, handleDelete, isCompleted, handleCompleted, handleEdit, date, handleInfo, }) => {
    return (
        <View style={[
            styles.container, 
            isCompleted && styles.todoCompleted,
        ]}>
            <View style={{flexDirection: "column"}}>
                <Text style={{fontSize:15, fontWeight: "bold", color:'white'}}>
                    {name}
                </Text>
                <Text 
                style={{
                    fontSize:10, 
                    color: isCompleted ? 'silver' : 'silver', 
                    margin: 5,
                }}>
                    {date}
                </Text>
            </View>
           
            <View style={{flexDirection:"row", gap: 10}}>
                <CustomButton 
                    light 
                    iconName ='delete'
                    onPress={() => handleDelete(id)}
                />
                <CustomButton 
                    iconName ='edit'
                    light onPress={() => handleEdit(id)} 
                />
                <CustomButton 
                iconName = {isCompleted ? 'done' : 'complete'}
                light
                onPress={() => handleCompleted(id)}
                />
                <CustomButton
                    iconName='info'
                    light
                    onPress={() => handleInfo(id)}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column", 
        marginTop: 30,
        justifyContent: "space-evenly", 
        padding: 10, 
        borderRadius: 5, 
         backgroundColor: '#2d705f',
        borderColor: 'white',
    }, 
    todoCompleted: {
        backgroundColor: '#2F5178',
    }, 
    todoName: {
        fontSize: 20,
    }


})

export default Todo1