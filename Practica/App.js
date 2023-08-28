import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

import CustomText  from './src/components/StyleText';
import CustomTouchable from './src/components/StyleButton';

export default function App() {
  
  // console.log(heigh)
  // const {width, heigh} = Dimensions.get("screen")

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'black',
    fontWeight: "bold",
  },
  buttom:{
    borderWidth: 5,
    padding: 5,
  },
  
  input:{
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
    height: 50
  }
});