import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text, Image } from "react-native";
import Screen3 from "../Screens/U2T9/Screen3";
import Screen2 from "../Screens/U2T9/Screen2";
import Screen1 from "../Screens/U2T9/Screen1";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

const RouterU2T9 = () => {
    return (
        <NavigationContainer>    
                <Stack.Navigator 
                    initialRouteName="Screen3"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#0d0d0d',
                            height: 70,
                        },
                        headerTintColor:'#0d0d0d',
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 15,
                        }, 
                        headerLeft: () => 
                        <TouchableOpacity>
                            <View style={styles.botonUp}>
                                <MaterialCommunityIcons name="backspace-outline" size={24} color="white" />
                            </View>
                        </TouchableOpacity>,
                        headerRight: () => 
                        <TouchableOpacity>
                            <View style={styles.botonUp}>
                                 <MaterialCommunityIcons name="wechat" size={25} color="white" />
                            </View>
                        </TouchableOpacity>,
                    }}
                >
                      <Stack.Screen
                        name="Screen1" 
                        component={Screen1} 
                        options = {{
                            headerShown: true,
                            headerMode: 'screen',
                            title: '',
                            headerTintColor: 'white',
                            headerTitleAlign: "center",
                            headerLeft: () =>
                            <Image 
                                style={styles.botonUp}
                                source={{uri: 'https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png'}}
                            />
                        }}
                     />
                     <Stack.Screen
                        name="Screen2" 
                        component={Screen2} 
                        options = {{
                            headerShown: true,
                            headerMode: 'screen',
                            title: '',
                            headerTintColor: 'white',
                            headerTitleAlign: "center",
                        }}
                     />
                    <Stack.Screen
                        name="Screen3" 
                        component={Screen3} 
                        options = {{
                            headerShown: true,
                            headerMode: 'screen',
                            title: 'Send',
                            headerTintColor: 'white',
                            headerTitleAlign: "center",
                        }}
                     />
                </Stack.Navigator>
                
    </NavigationContainer>
    )
}
export default RouterU2T9

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