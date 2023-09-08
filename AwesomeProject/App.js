import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,

  },
});
