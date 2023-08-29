import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoginHeader(){
    return (
        <View style={styles.container}>
            <Text style = {styles.text}>Sign in to your Account</Text>
            <Text style = {styles.text2}>Sign in to your Account</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#202b44',
      width: '100%',
    },
    text:{
      color: 'white',
      fontWeight: "bold",
      paddingTop: '25%',
      paddingLeft: 15,
      fontSize: 30,
      textAlign: 'left',
    },
    text2:{
      color: 'silver',
      fontWeight: "normal",
      paddingTop: '5%',
      paddingLeft: 15,
      fontSize: 13,
      textAlign: 'left',
    },
  });
    