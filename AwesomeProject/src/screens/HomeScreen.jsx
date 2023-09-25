import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {
    return (
        <View>
            <Text>Home screen</Text>
             <Button title='Go to the login page' 
             onPress={() => NavigationPreloadManager.navigate('login', {name: 'Eder'})}/>
        </View>
    )
}
export default HomeScreen