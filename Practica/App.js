import { Dimensions, StyleSheet,
   FlatList, Text, TouchableOpacity, View, Image, TextInput,
   SafeAreaView, Platform
} from 'react-native';
import  Constants  from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import IosText from './src/components/IosText';
import AndroidText from './src/components/AndroidText';

const CustomText = Platform.select({
  ios: () => IosText,
  android: () => AndroidText
})

export default function App() {

  console.log(Platform)

  return (
    <View style={styles.container}>
          <Text>Deploy your app! </Text>
          <AntDesign name="arrowsalt" size={24} color="black" />
          <CustomText />
    </View>  
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlignVertical: 'center',
    backgroundColor: Platform.select({
      android: 'white',
      ios: 'cyan',
      web: 'black'
    }),
    paddingTop: Constants.statusBarHeight,
    },
    text: {
      color: Platform.OS == 'web' ? 'black' : 'blue', 
    },
    ...Platform.select({
        android: {
          padding: 200,
        }
   }),
});



