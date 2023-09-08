import React from "react";
import { View, Text, StyleSheet } from "react-native";



const SymptomCard = (text, emoji) => {
    return(
        
        <View style={styles.symptomsContainer}>
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "#2263df",
                    textAlign: "center",
                }}
            >
                text
            </Text>
                
    
                    
        </View>

    );

}

const styles = StyleSheet.create({
    
    symptomsContainer: {
        backgroundColor: '#c6ceff',

    }




})


export default SymptomCard

