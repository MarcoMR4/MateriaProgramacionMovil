import { View, Text } from "react-native"
import { UseAppContext } from "../Hooks/UseAppContext"
import CardAge from "./CardAge"

const CardLocation = () => {
    const {person} = UseAppContext()
    return (
        <View style={{ borderWidth: 1, borderColor: 'blue', borderRadius: 10, padding: 10}}>
            <Text style={{ textAlign:"center", fontSize: 20, fontWeight: "bold"}}>CARD LOCATION</Text>
            <Text style={{ textAlign:"center", fontSize:20}}>Country {person.country}</Text>
            <Text style={{ textAlign:"center", fontSize:20}}>City:{person.city}</Text>

            <CardAge />


        </View>
    )
    
        
}
export default CardLocation