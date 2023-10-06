import { View, Text, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useGlobalContext } from "../../Context/ThemeContext";

const Card = ({iconName,  text}) => {

    let {globalState} = useGlobalContext();

    let cardBackgroundColorStyle = {
        backgroundColor : globalState.cardOptionsColor
    }

    return (
        <View style = {[styles.container, cardBackgroundColorStyle]}>
            <MaterialCommunityIcons name={iconName} size={24} color={globalState.fontColor} />
            <Text style={{color:'#969e64', fontSize: 13,}}>{text}</Text>
        </View>

    )
}
export default Card

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        alignItems: "center",
        borderRadius: 30,
        textAlign: "center", 
        justifyContent: "center",
        padding: 20,
        marginRight:20,
    },
})
