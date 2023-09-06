import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function IosText() {
    return (
      <View style={styles.container}>
        <Text>ios</Text>
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

});