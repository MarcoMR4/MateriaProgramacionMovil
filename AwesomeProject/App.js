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
import Welcome from "./src/screens/Task9/Welcome";
import WelcomeBack from "./src/screens/Task9/WelcomeBack";
import NewAccount from "./src/screens/Task9/NewAccount";

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Welcome />
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
