import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Home screen</Text>
             <Button title='Go to the login page' 
                onPress={() => navigation.navigate('Login', {name: 'Usuario'})}
             />
        </View>
    )
}
export default HomeScreen