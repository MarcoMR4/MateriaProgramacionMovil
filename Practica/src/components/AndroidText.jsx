import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function AndroidText() {
    return (
      <View style={styles.container}>
        <Text>Andriod</Text>
        <Text>Andriod</Text>
        <Text>Andriod</Text>
        <Text>Andriod</Text>
        <Text>Andriod</Text>
      </View>     
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
});