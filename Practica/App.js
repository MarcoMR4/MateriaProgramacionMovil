import { Dimensions, StyleSheet,
   FlatList, Text, TouchableOpacity, View, Image, TextInput,
   SafeAreaView, Platform
} from 'react-native';
import  Constants  from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

const numeros = [
  {id: 0, num: 0},
  {id: 1, num: 1},
  {id: 2, num: 2},
  {id: 3, num: 3},
  {id: 4, num: 4},
  {id: 5, num: 5},
  {id: 6, num: 6},
  {id: 7, num: 7},
  {id: 8, num: 8},
  {id: 9, num: 9},
]

export default function App() {

  return (
    <View style={styles.container}>
          <Text>Deploy your app! </Text>
          <AntDesign name="arrowsalt" size={24} color="black" />
    </View>  
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    paddingTop: Constants.statusBarHeight,

  },
  liston: {
    width: '100%',
    height: '100%',
    marginTop: 50,
  },
});



