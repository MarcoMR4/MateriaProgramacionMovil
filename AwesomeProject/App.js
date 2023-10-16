import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import Account from "./src/Screens/Account";
import AuthContextProvider from "./src/context/authContext";
import { useAuthContext } from "./src/hooks/useAuthContext";
import Layout from "./src/Layout/Layout";

const Stack = createStackNavigator();

// U3 practica 1, envolver solo layout en authprovider 
//El app. js debe quedar lo mas vacio posible, el layout contiene toda la app con las rutas 
//tarea1, cambiar asynstorage por otro paquete, evitar que se abra el login si ya hay usuario 
//usar un louder o spiner al cargar login, si hay un usuario, que carge spinner y entre  
//Usar securestore en el asyncstorage, 
//Que la pantalla de inicio sea get started y no login como en tarea 10 

export default function App() {
  return (
    <AuthContextProvider>
      <Layout />
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </AuthContextProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});