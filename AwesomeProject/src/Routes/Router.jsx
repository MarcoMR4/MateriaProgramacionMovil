import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const Router = () => {
    return (

        <View>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login1" component={LoginScreen} />
                
             </Stack.Navigator>
        </View>
    )
}
export default Router