import React from "react";
import { View } from "react-native";
import CardLocation from "./CardLocation";


const CardFutter = ({person}) => {
    return (
        <View>
            <Text>CARD FOOTER</Text>
            <CardLocation person={person} />

        </View>
            

    )
}
export default CardFutter