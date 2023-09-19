import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const CustomButton = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} >
                <Text style={{color: 'green', fontSize: 15, fontWeight: "bold"}}>{text}</Text>
            </View>  
        </TouchableOpacity>
    )  
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, 
        alignContent: "center", 
        justifyContent: "center",
        padding: 8, 
        borderColor: 'green', 
        borderRadius: 10,
        backgroundColor: 'silver',
        width: '100%',
    }
})

export default CustomButton