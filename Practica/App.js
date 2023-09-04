import { Dimensions, StyleSheet,
   FlatList, Text, TouchableOpacity, View, Image, TextInput,
   SafeAreaView, Platform
} from 'react-native';
import  Constants  from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';



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



