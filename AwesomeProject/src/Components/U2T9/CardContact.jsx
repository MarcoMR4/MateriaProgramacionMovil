import { View, Text, StyleSheet, Image } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { useGlobalContext } from "../../Context/ThemeContext";


const CardContact = ({name, code, img}) => {
    let {globalState} = useGlobalContext();

    let backgroundColorStyle ={
        backgroundColor: globalState.cardOptionsColor
    }

    let fontColorStyle = {
        color: globalState.fontColor
    }

    return (
        <View style = {[styles.container, backgroundColorStyle]}>
            <View style={{flexDirection:"row"}}>
                <Image 
                    style={{width: 30, height: 30, borderRadius: 50, marginRight: 10,}}
                    source={{uri: img}}
                />
                <View style={{width: 100}}>
                    <Text style={[{fontSize: 10,}, fontColorStyle]}>{name}</Text>
                    <Text style={{color:'#969e64', fontSize: 10}}>{code}</Text>
                </View>

            </View>
            <Entypo name="dots-three-vertical" size={20} color={globalState.fontColor} />
        </View>
    )
}
export default CardContact

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '80%',
        height: 30,
        alignItems: "center",
        textAlign: "center", 
        justifyContent: "center",
        padding: 5,
        margin: 5,
        justifyContent: "space-between",
    },
})
