import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const LoginScreen = ({navigation, route}) => {

    const {name} = route.params

    const navigation1 = useNavigation()
    console.log(navigation)
    
    return (
        <View>
            <Header />
            <Text>Login</Text>
            <Text>{name}</Text>
            <Button 
                title='Go back'
                disabled={!navigation1.canGoBack()}
                onPress={() => navigation1.goBack()}
            />
        </View>   
    )
}
export default LoginScreen