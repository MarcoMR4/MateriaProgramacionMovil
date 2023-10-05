import React from "react";
import { View, Text } from "react-native";
import CardLocation from "./CardLocation";
import { UseAppContext } from "../Hooks/UseAppContext";


const CardFutter = () => {

    const {person} = UseAppContext()
    return (
        <View style={{ borderWidth: 1, borderColor: 'red', borderRadius: 10, padding: 10, marginTop: 10,}}>
            <Text style={{ textAlign:"center", fontSize: 20, fontWeight: "bold"}}>CARD FOOTER</Text>
            <CardLocation person={person} />
    
        </View>
            

    )
}
export default CardFutter