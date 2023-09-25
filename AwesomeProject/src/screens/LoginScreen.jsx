import React from "react";
import { Text } from "react-native";

const LoginScreen = ({route}) => {
    console.log(route)
    const {name} = route.params
    return (
        <Text>Login</Text>
    )
}
export default LoginScreen