import { Text, View } from "react-native"
import { UseAppContext } from "../Hooks/UseAppContext"
import CardFutter from "./CardFutter"
import Card2Id from "./Card2Id"


const Card2 = () => {
    const {person} = UseAppContext()
    console.log(person)

    return (
        <View style={{borderWidth: 1, borderRadius: 10, padding: 20, backgroundColor: !person.isActive ? 'white' : 'silver'}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20}}>
                CARD COMPONENT
            </Text>
            <Card2Id />
            <Text style={{ fontSize: 20, }}>Name: {person.name}</Text>
            <Text style={{ fontSize: 20, }}>Name: {person.lastName}</Text>


            <CardFutter />
        </View>
    )
    
}
export default Card2


