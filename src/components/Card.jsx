import React from "react";
import { View, StyleSheet } from "react-native";

const Card = () => {
    return (
        <View style={styles.cardContainer}>
                <View style = {styles.cardIconContainer}>
                 <FontAwesome5 name="hdd" size={30} color="white" />
                </View>

                <Text style = {styles.cardText}>Start trainning</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 200,
        width: 220,
        backgroundColor: '#c6ecff', 
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: "center",
        gap: 50,
    },
    cardIconContainer: {
        backgroundColor: '#2362df',
        width: 50,
        height: 50,
        padding: 5,
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 50, 
    }, 
    cardText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#48525e',
    }


})


export default Card

