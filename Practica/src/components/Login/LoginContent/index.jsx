import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginContent(){
    return (
        <View style={styles.container}>
        
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>

            
            <Text style={styles.text1} >Forgot Password?</Text>

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.text2} >Login</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    input: {
        width: 300,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'silver',
        marginTop: 40,
      },
      text1: {
        color: '#abd638',
        textAlign: 'right',
        marginLeft: 150,
        marginTop: 20,
      },
      text2: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 15,
      },
      buttonLogin: {
        backgroundColor: '#abd638',
        borderRadius: 10,
        marginTop: 20,
        width: 300,
        height: 40,
        padding: 5,
      },
      
});
    
