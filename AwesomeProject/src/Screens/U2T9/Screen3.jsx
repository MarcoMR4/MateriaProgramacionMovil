import { useGlobalContext } from "../../Context/ThemeContext"
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import KeyButton from "../../Components/KeyButton";

const Screen3 = () => {

    let {globalState} = useGlobalContext();


    let backgroundColorStyle = {
        backgroundColor: globalState.bgColor
    }

    let fontColorStyle = {
        color: globalState.fontColor
    }

    let cardBackgroundColor = {
        backgroundColor: globalState.transactionCardBackgroundColor
    }

    return (
        <View style={[styles.container, backgroundColorStyle]}>
            <Image 
                style={{borderRadius: 50, width: 60, height: 60, borderWidth: 1, borderColor: 'white', marginBottom: 10,}}
                source={{uri: 'https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png'}}
            />
            <Text style={[{fontSize: 20, marginBottom: 5}, fontColorStyle]}>Benjamin Parker</Text>
            <Text style={{fontSize: 18, color: '#575757', marginBottom: 10}}>**** 3294</Text>

            <TextInput 
                style={{
                    color: 'silver', 
                    fontSize: 40
                }} 
                value="$340.00"
            />
            <View style={styles.teclado} >
                <View style={styles.tecladoFila}>
                    <KeyButton text="1" />
                    <KeyButton text="2" />
                    <KeyButton text="3" />
                </View>
                <View style={styles.tecladoFila}>
                    <KeyButton text="4" />
                    <KeyButton text="5" />
                    <KeyButton text="6" />
                </View>
                <View style={styles.tecladoFila}>
                    <KeyButton text="7" />
                    <KeyButton text="8" />
                    <KeyButton text="9" />
                </View>
                <View style={styles.tecladoFila}>
                    <KeyButton text="&lt;" />
                    <KeyButton text="0" />
                    <KeyButton text="." />
                </View>
            </View>   

            <TouchableOpacity>
                <Text style={[{
                    color: 'black',
                    width: 350,
                    height: 50,
                    textAlign: "center",
                    padding: 10,
                    fontSize: 18,
                    fontWeight: "bold",
                    borderRadius: 30,
                }, cardBackgroundColor]}>
                    Send
                </Text>
            </TouchableOpacity>

        </View>
    )
}
export default Screen3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    }, 
    teclado: {
        marginTop: 15,
        marginBottom: 20,
    },
    tecladoFila: {
        flexDirection: "row", 
        marginBottom: 5,
    },
})