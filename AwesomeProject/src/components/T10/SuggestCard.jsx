import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SuggestCard = ({text}) => {
    return(

        <View style={styles.suggContainer}>
            <Text
                style={{
                    fontSize: 20,
                }}
            >
                {text}
            </Text>
            <MaterialCommunityIcons name="window-close" size={14} color="black" />
                
    
                    
        </View>

    );

}
export default SuggestCard

const styles = StyleSheet.create({
    suggContainer: {
        borderRadius: 10,
        fontSize: 5,
        backgroundColor: 'white',
        borderWidth:1, 
        height: 10,
        flexDirection: "row",
        margin: 40,
    },
    



})



