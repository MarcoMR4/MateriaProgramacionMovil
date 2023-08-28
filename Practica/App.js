import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StyleText } from './src/components/StyleText';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a react native!</Text>
      <StyleText text='Custom style text' fontSize={30} />

      <TouchableOpacity style={styles.buttom} onPress={() => console.log('Press')}>
        <Text>Buttom</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'blue',
  },
  buttom:{
    borderWidth: 5,
    padding: 5,
  }
});