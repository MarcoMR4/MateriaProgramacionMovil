import { 
  StyleSheet,
  Text, 
  TouchableOpacity, 
  View, 
  Image, 
  TextInput,
  SafeAreaView, 
  Platform
} from 'react-native';
import  Constants  from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import IosText from './src/components/IosText';
import AndroidText from './src/components/AndroidText';
import CustomTexts from './src/components/CustomTexts';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  return (
    <SafeAreaView>
      <WelcomeScreen />
      <StatusBar style = {{}} />
      
    </SafeAreaView>
    
     
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



