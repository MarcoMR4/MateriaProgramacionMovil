import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginContent from '../components/Login/LoginContent';
import LoginHeader from '../components/Login/LoginHeader';

export default function Login(){
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <LoginHeader />
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
    },
    item: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
      },
});