import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const CharacterInfo = ({navigation, route}) => {
    const {name, status, specie, firstSeen, lastLocation,
        image,gender,type,episode,created} = route.params
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{fontSize: 30, color: 'silver', textAlign:"center", margin: 10}}>
                    Character Info: 
                </Text>
                <Image source={{uri: image}} style={styles.picture} />
                <Text style={styles.datos}>Name: 
                    <Text style={{color: 'white'}}> {name}</Text>
                </Text>
                <Text style={styles.datos}>Status: 
                    <Text style={{color: 'white'}}> {status}</Text>
                </Text>
                <Text style={styles.datos}>Species: 
                    <Text style={{color: 'white'}}> {specie}</Text>
                </Text>
                <Text style={styles.datos}>Type: 
                    <Text style={{color: 'white'}}> {type === '' ? 'Not assigned' : type}</Text>
                </Text>
                <Text style={styles.datos}>Gender: 
                    <Text style={{color: 'white'}}> {gender}</Text>
                </Text>
                
                <Text style={styles.datos}>First seen in: 
                    <Text style={{color: 'white'}}> {firstSeen}</Text>
                </Text>
                <Text style={styles.datos}>Last location: 
                    <Text style={{color: 'white'}}> {lastLocation}</Text>
                </Text>
                <Text style={styles.datos}>Created: 
                    <Text style={{color: 'white'}}> {created}</Text>
                </Text>
                <Text style={styles.datos}>Episodes: 
                    <Text style={{color: 'white'}}> {episode}</Text>
                </Text>

            </ScrollView>
                     
        </View>  
    )
}
export default CharacterInfo

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#272b33',
        flex: 1,
        padding: 10,
        alignItems: "center",
    }, 
    datos: {
        fontSize: 22, 
        color: '#BCF7F2', 
        marginBottom: 20,
    }, 
    picture: {
        width: 330, 
        height: 300,
        marginBottom: 10,
        borderRadius: 20,
    },
})