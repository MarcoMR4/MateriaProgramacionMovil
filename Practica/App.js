import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

import CustomText  from './src/components/StyleText';
import CustomTouchable from './src/components/StyleButton';
import Login from './src/screens';

export default function App() {
  
  // console.log(heigh)
  // const {width, heigh} = Dimensions.get("screen")

  return (
    <View style = {styles.container}>
       <View style={styles.item}>
        <Login></Login>
       </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
});



