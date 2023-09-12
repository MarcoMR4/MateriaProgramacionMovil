import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { GRISTASK10, GRISTASK10Category, naranjaT10 } from "../../constants/colors";
import { FontAwesome5 } from '@expo/vector-icons';


const ProductCard = ({description, category, price, imgName}) => {
    return(

        <View style={styles.productContainer}>
            <Image 
                source={imgName}
                style={{height: 150, width: 150}}
            />

            <Text
                style={{
                    fontSize: 13,
                    color: GRISTASK10Category,
                }}
            >
                {category}
            </Text>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: "bold",
                }}
            >
                {description}
            </Text>

            <View style={{
                    flexDirection: "row",
                }}
            >
            <FontAwesome5 name="coins" size={24} color={naranjaT10}  />
            <Text>${price}</Text>
            </View>
                
    
                    
        </View>

    );

}

export default ProductCard

const styles = StyleSheet.create({
    
    productContainer: {
        borderRadius: 10,
        backgroundColor: GRISTASK10,
        margin: 5,
        width: 200,
        height: 350, 
        alignItems: "center",

    },
    



})
