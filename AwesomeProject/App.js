import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
} from "react-native";
import Constants from "expo-constants";
import CharacterSCreen from "./src/screens/CharacterScreen";

//Unidad 2 practica 4: useEffect


export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CharacterSCreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});
