import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';


const CustomButton = ({onPress, iconName, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} >
                
                {iconName === 'edit' ? (
                    <FontAwesome name="edit" size={24} color="white" />
                ) : 
                iconName === 'delete' ? (
                    <MaterialCommunityIcons name="delete-outline" size={24} color="white" />
                ) :
                iconName === 'done' ? (
                    <Fontisto name="checkbox-active" size={24} color="white" />
                ) :
                iconName === 'complete' ? (
                    <Fontisto name="checkbox-passive" size={20} color="white" />
                ) :
                iconName === 'info' ? (
                    <FontAwesome name="eye" size={25} color="white" />
                ) :
                iconName === 'Edit Task' || 'Add task' ? (
                    <Text>{text}</Text>
                ) : 
                null
                
                }
                
            </View>  
        </TouchableOpacity>
    )  
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, 
        alignContent: "center",
        justifyContent: "center",
        borderColor: 'white', 
        borderRadius: 10,
        width: 70,
        height: 50,
        alignItems: "center",
        paddingVertical: 1,
        backgroundColor: 'silver',
    }
})

export default CustomButton