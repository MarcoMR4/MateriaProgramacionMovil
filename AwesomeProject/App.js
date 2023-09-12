import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import WelcomeT10 from "./src/screens/tarea10/WelcomeT10";




export default function App() {



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <WelcomeT10 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
