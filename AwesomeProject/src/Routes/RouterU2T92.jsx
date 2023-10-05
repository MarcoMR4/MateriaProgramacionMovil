import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text, Image } from "react-native";
import Screen3 from "../Screens/U2T9/Screen3";
import Screen2 from "../Screens/U2T9/Screen2";
import Screen1 from "../Screens/U2T9/Screen1";
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

const RouterU2T92 = () => {
    return (
        <NavigationContainer>    
            <Drawer.Navigator
                initialRouteName="Screen1"
                screenOptions={{
              
                }}
            >
                <Drawer.Screen name="Screen1" component={Screen1} />
                <Drawer.Screen name="SCreen2" component={Screen2} />
                <Drawer.Screen name="SCreen3" component={Screen3} />
            </Drawer.Navigator>
                     
        </NavigationContainer>
    )
}
export default RouterU2T92

const styles = StyleSheet.create({
    botonUp: {
        width: 45, 
        height: 45, 
        borderWidth: 0.5, 
        borderColor: 'silver', 
        borderRadius: 15,
        padding: 10, 
    }
});