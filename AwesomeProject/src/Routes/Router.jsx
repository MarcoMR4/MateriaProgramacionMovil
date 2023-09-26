import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, StyleSheet,  } from "react-native";
import CharacterSCreen from "../screens/CharacterScreen";
import CharacterInfo from "../screens/CharacterInfo";

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>    
                <Stack.Navigator initialRouteName="CharacterScreen">
                    <Stack.Screen name="Home" component={CharacterSCreen} />
                    <Stack.Screen name="Character" component={CharacterInfo} />
                </Stack.Navigator>
    </NavigationContainer>
    )
}
export default Router

const styles = StyleSheet.create({
    
});