import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CalcuHeader(){
    return (
        <View style={styles.container}>

            <View style = {styles.container1}>
                <Text>Withdraw Money</Text>
            </View>
            
        </View>           
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#d56841'
    },
    container1: {
        flex: 1, 
        flexDirection: 'row',
        color: 'white',
        fontSize: 20
    },
    container2: {
        backgroundColor: 'white', 
        flex: 1, 
        flexDirection: 'vertical',
        
    }

});