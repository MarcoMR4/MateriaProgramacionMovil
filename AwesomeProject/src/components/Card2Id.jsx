import { View, Text } from "react-native"
import { UseAppContext } from "../Hooks/UseAppContext"


const Card2Id = () => {
    const {person} = UseAppContext()
    return (
        <View style={{borderWidth: 1, borderRadius: 10, borderColor: 'brown', marginBottom: 10}}>
            <Text style={{textAlign:"center", fontSize: 20}}>ID: {person.id}</Text>
        </View>
    )
       
}
export default Card2Id

