import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoginHeader(){
    return (
        <View style={styles.container}>
            <Text style = {styles.text}>Sign in to your Account</Text>
            <Text>Sign in to your Account</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#5a5a77',
    },
    text:{
      color: 'cyan',
      fontWeight: "bold",
    },
  });
    