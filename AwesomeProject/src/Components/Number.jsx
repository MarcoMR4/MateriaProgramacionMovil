import React from "react";
import { View, StyleSheet } from "react-native";


export const Number = ({number, role, onpress}) => {

    return (
        <View style={styles.container}>
            <Text>{number}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 70,
        height:70,
        display: 'flex',


    },
    numberContainer:{

    },
    operatorContainer:{

    },

})