import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";
import Welcome from "./src/Screens/Welcome";
import Account from "./src/Screens/Account";
import Menu from "./src/Screens/Menu";
import AuthContextProvider from "./src/context/authContext";
import { useAuthContext } from "./src/hooks/useAuthContext";
import RouterT10 from "./src/Routes/RouterT10";



export default function App() {
  return (
    <AuthContextProvider>
       <NavigationContainer>
         <View style={styles.container}>
          <RouterT10 />
         </View>
      </NavigationContainer>
    </AuthContextProvider>
  );
}


const Layout = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Stack.Screen name="Login" component={Login} />;
  }

  return (
    <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});