import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ToDo = ({name}) => {
    return (
        <View styles={styles.container}>

            <Text>{name}</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,

    },



})

export default ToDo