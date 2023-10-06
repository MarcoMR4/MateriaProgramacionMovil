import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { View, StyleSheet, Image, Switch, Text } from "react-native";
import Screen3 from "../Screens/U2T9/Screen3";
import Screen2 from "../Screens/U2T9/Screen2";
import Screen1 from "../Screens/U2T9/Screen1";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "../Context/ThemeContext";
import OptionFunctions from "../logic/functions";

const Stack = createStackNavigator();

const RouterU2T9 = () => {
    let {handleDarkMode} = OptionFunctions();
    let {globalState} = useGlobalContext();

    let backgroundColorStyle = {
        backgroundColor : globalState.bgColor
    }

    const navigation = useNavigation();

    const navigateToScreen1 = () => {
    navigation.navigate("Screen1");
  };
    
    return (   
            <Stack.Navigator 
                    initialRouteName="Screen1"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: globalState.bgColor,
                            height: 70,
                        },
                        headerTintColor:'#0d0d0d',
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 15,
                        }, 
                        headerLeft: () => 
                        <TouchableOpacity onPress={navigateToScreen1}>
                            <View style={styles.botonUp}>
                                <MaterialCommunityIcons name="backspace-outline" size={24} color={globalState.fontColor} />
                            </View>
                        </TouchableOpacity>,
                        headerRight: () => 
                            <View style={{flex:1, flexDirection:"row", justifyContent:'center', alignItems:'center', padding:10,}}>
                                <Text style={{color:globalState.fontColor}}>Mode</Text>
                                <Switch
                                    trackColor={{ false: globalState.fontColor, true: globalState.fontColor }}
                                    thumbColor={'#969e64'}
                                    onValueChange={handleDarkMode}
                                    value={globalState.darkMode}
                                />
                            </View>,
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
                            headerLeft: () => (
                                <TouchableOpacity onPress={navigateToScreen1}>
                                  <View style={styles.botonUp}>
                                    <MaterialCommunityIcons
                                      name="backspace-outline"
                                      size={24}
                                      color={globalState.fontColor}
                                    />
                                  </View>
                                </TouchableOpacity>
                            ),
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
                            headerLeft: () => (
                                <TouchableOpacity onPress={navigateToScreen1}>
                                  <View style={styles.botonUp}>
                                    <MaterialCommunityIcons
                                      name="backspace-outline"
                                      size={24}
                                      color={globalState.fontColor}
                                    />
                                  </View>
                                </TouchableOpacity>
                            ),
                        }}
                     />
                </Stack.Navigator>    
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