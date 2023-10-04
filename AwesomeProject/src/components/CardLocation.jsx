import react from "react"
import { View, Text } from "react-native"


const CardLocation = ({person}) => {
    return (
        <View>
            <Text>{person.country}</Text>
            <Text>{person.city}</Text>
        </View>
    )
    
        
}
export default CardLocation