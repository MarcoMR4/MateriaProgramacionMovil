import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = ({navigation}) => {
    const navigation1 = useNavigation()
    return (
        <View>
            <Text>Home screen</Text>
             <Button title='Go to the login page' 
                onPress={() => navigation.navigate('Login', {name: 'Usuario1'})}
             />
              <Button 
                title='Go back'
                disabled={!navigation1.canGoBack()}
                onPress={() => navigation1.goBack()}
            />
        </View>
    )
}
export default HomeScreen

