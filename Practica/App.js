import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CustomText  from './src/components/StyleText';
import CustomTouchable from './src/components/StyleButton';

export default function App() {

  
  const press1 = () => {
    console.log("Mensaje al presionar");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a react native!</Text>

      <CustomText fontSize={10} color="red" fontWeight="bold">
        Texto custom
      </CustomText>

      <TouchableOpacity style={styles.buttom} onPress={() => console.log('Press')}>
        <Text>Buttom</Text>
      </TouchableOpacity>
      

      <CustomTouchable
        activeOpacity={0.9}
        text="Custom button"
        style = {{backgroundColor: "cyan"}}
        onPress={press1}
      />
        
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