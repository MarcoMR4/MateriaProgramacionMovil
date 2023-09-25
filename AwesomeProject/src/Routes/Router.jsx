import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, StyleSheet,  } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>    
                <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
                
    </NavigationContainer>
    )
}
export default Router

const styles = StyleSheet.create({
    
});