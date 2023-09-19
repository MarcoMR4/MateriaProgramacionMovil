import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const TodoInput = ({value, onChangeText}) => {
    return (
        <TextInput 
            style={styles.container}
            value={value}
            onChangeText={onChangeText}
            placeholder="Escrbe aquí tu tarea"
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:1, 
        borderColor: 'green', 
        flex: 1,
        borderRadius: 10,
        color: 'green',
        padding: 10,
    }
})

export default TodoInput