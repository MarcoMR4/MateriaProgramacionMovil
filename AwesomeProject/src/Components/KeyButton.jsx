import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useGlobalContext } from "../Context/ThemeContext";

export default function KeyButton({text=''}){

    let {globalState} = useGlobalContext();

    let backgroundColorStyle = {
        backgroundColor : globalState.cardOptionsColor,
        color: globalState.fontColor
    }

    return(
        <TouchableOpacity>
            <Text style={[styles.tecla, backgroundColorStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tecla :{
        padding: 20, 
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 5,
        width: 100,
        height: 80,
        textAlign: "center",
        fontSize: 20,
    }
})