import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const SuggCard = ({text}) => {
    return(

        <View style={styles.suggContainer}>
            <Text
                style={{
                    fontSize: 12,
                }}
            >
                {text}
            </Text>
            <MaterialCommunityIcons name="window-close" size={10} color="black" />
                
    
                    
        </View>

    );

}
export default SuggCard

const styles = StyleSheet.create({
    suggContainer: {
        borderRadius: 15,
        backgroundColor: 'white',
        height: 50,
        flexDirection: "row",
        margin: 10,
        width: 90,
        alignItems: "center",
        justifyContent: "space-evenly",

    },
    
})