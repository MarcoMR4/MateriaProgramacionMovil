import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>    
                <Stack.Navigator 
                    initialRouteName="HomeScreen"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor:'#fff',
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 15,
                        }, 
                        // headerLeft: () => <Text>Foto</Text>,
                    }}
                >
                    <Stack.Screen
                        name="Home" 
                        component={HomeScreen} 
                        options = {{
                            headerShown: true,
                            headerMode: 'screen',
                            title: 'Home',
                            headerTintColor: 'white',
                            headerRight: () => <Text>Right</Text>,
                            headerTitleAlign: "center",
                        }}
                     />
                    <Stack.Screen 
                        name="Login" 
                        component={LoginScreen} 
                        options = {{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
                
    </NavigationContainer>
    )
}
export default Router

const styles = StyleSheet.create({});