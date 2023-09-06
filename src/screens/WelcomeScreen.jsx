import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Card from "../components/Card";

const WelcomeScreen = () => {
    return (
        <View styles = {styles.container}>
            <View style = {styles.headerContainer}>
            <Ionicons name="notifications-circle-outline" size={30} color="#3764c2" />
            <Image 
                style = {styles.headerImage}
                source = {{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg'
                }}
            />
            </View>
            <View style = {styles.titleContainer}>
                <Text>Hello, </Text>
                <Text>Chris! 👋</Text>
            </View>
            <Text style = {styles.titleText}>
                <Text style={{color: '#c1c0c4'}}>Hello, </Text>
                <Text style={{color: '#c1c0c4'}}>Chris! 👋</Text>
            </Text>
            <View style={styles.cardContainer}>
                <View style = {styles.cardIconContainer}>
                 <FontAwesome5 name="hdd" size={30} color="white" />
                </View>

                <Text style = {styles.cardText}>Start trainning</Text>
            </View>

            

            
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card/>
                <Card/>
                
            </ScrollView>
                
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 15,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',

    },
    headerImage: {
        width: 30,
        height: 30,
    },
    titleContainer: {
        flexDirection: "row",
    },
    titleText: {
        fontSize: 35,
        marginTop: 15,

    },
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


export default WelcomeScreen