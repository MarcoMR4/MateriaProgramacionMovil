import React from "react";
import { View, StyleSheet } from "react-native";


const Card = ({isDarkBlue, text, iconName, iconType}) => {

    const CustomIconColor = isDarkBlue ? 'white' : '#537acd'


    const CustomIcon =
        iconType === 'Iconicons'
        ? (<Ionicons color= {icon} name={iconName} size={30} />)
        : (<AntDesign name={iconName} size={30} />)
        
        
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
    cardContainer2: {
        height: 100,
        width: 100,
        backgroundColor: '#red', 
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: "center",
        gap: 50,
    },
    cardContainerLight: {
        backgroundColor: '#2362df', 
    },
    cardContainerDark: {
        backgroundColor: '#e6ecff', 
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

