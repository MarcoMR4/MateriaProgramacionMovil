import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import Home1 from "../screens/unidad2_tarea6/Home1";
import TicketScreen from "../screens/unidad2_tarea6/TicketScreen";

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>    
                <Stack.Navigator 
                    initialRouteName="HomeScreen"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor:'#fff',
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                        }, 
                        // headerLeft: () => <Text>Foto</Text>,
                    }}
                >
                    <Stack.Screen
                        name="Home" 
                        component={Home1} 
                        options = {{
                            headerShown: false,
                            title: 'Home2',
                            
                            headerRight: () => <Text>Right</Text>,
                            headerTitleAlign: "center",
                        }}
                     />
                    <Stack.Screen 
                        name="Tickets" 
                        component={TicketScreen} 
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