import { View, Text, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Card = ({iconName,  text}) => {
    return (
        <View style = {styles.container}>
            <MaterialCommunityIcons name={iconName} size={24} color="white" />
            <Text style={{color:'#969e64', fontSize: 13,}}>{text}</Text>
        </View>

    )
}
export default Card

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100, 
        backgroundColor: '#1f1f1f',
        alignItems: "center",
        borderRadius: 30,
        textAlign: "center", 
        justifyContent: "center",
        padding: 20,
        marginRight:20,
    },
})
