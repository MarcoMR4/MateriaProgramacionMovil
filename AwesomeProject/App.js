import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Screen1EXam from "./src/Screens/Screen1Exam";
import TabNavigatorExam from "./src/Routes/TabNavigatorExam";


export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
            <TabNavigatorExam />
        </View>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1d2b",
    paddingTop: Constants.statusBarHeight,
  },
});