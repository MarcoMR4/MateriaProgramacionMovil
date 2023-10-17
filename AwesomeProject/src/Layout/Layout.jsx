import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Account from "../Screens/Account";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";

export const Stack = createStackNavigator();


export const Layout = () => {
    const { user } = useAuthContext();
  
    if (!user) {
      return (
        <>
          <NavigationContainer>
            <View style={styles.container}>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
              </Stack.Navigator>
              <StatusBar style="auto" />
            </View>
          </NavigationContainer>
        </>
      );
    }
  
    return (
      <>
        <NavigationContainer>
          <View style={styles.container}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Account" component={Account} />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </View>
        </NavigationContainer>
      </>
    );
};
export default Layout


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Constants.statusBarHeight,
    },
  });