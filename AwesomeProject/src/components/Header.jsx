import React from "react"
import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons'

const Header = () => {
    const navigation1 = useNavigation()
    return (
        <View>
            <Text>This is my header</Text>
            <AntDesign 
                name="caretleft" 
                size={24} 
                color="black" 
                onPress={() => navigation1.goBack()}
            />

          </View>
    )

}
export default Header