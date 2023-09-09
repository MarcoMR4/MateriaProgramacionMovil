import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { SALMON1 } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function WelcomeBack() {
  return (
    <View style={styles.container}>  
        
        <TouchableOpacity>
            <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>

        

        <View  style={styles.headerContainer}>
            <Text style={styles.textHeader}>
                Welcome Back!
            </Text>
            <Ionicons name="remove-outline" size={60} color={SALMON1} />
        </View>
        

        <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
                Email
            </Text>
            <TextInput 
                style={styles.input}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
                Password
            </Text>
            <TextInput 
                secureTextEntry={true}
                style={styles.input}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
                Remember me
            </Text>
            <TextInput 
                secureTextEntry={true}
                style={styles.input}
            />
        </View>

        <View style={styles.botonSignIn}>
            <TouchableOpacity>
                <Text style={{
                    color:'white', 
                    fontWeight: 'bold',
                    fontSize: 16,
                }}>
                   Sign In !
                </Text>
            </TouchableOpacity>
        </View>

    


    </View>
  );
}

export default WelcomeBack;

const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 40,
    },
    headerContainer:{
        marginBottom: 40,
    },
    textHeader:{
        fontSize: 37, 
        fontWeight: 'bold',
        marginTop: 60,
    }, 
    input:{
        borderWidth: 1, 
        borderColor: 'silver',
        height: 40,
        width: '95%',
        borderRadius: 10,
    },  
    botonSignIn:{
        height: 50,
        width: '95%',
        backgroundColor: SALMON1,
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        marginTop: 40,
    },
    labelInput:{
        color: 'silver', 
        fontSize: 15, 
    }, 
    inputContainer : {
        marginBottom: 20, 
        width: '100%',
    }

})