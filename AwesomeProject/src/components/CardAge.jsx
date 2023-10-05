import { View, Text } from "react-native";
import { UseAppContext } from "../Hooks/UseAppContext";
import CardSchool from "./CardSchool";


const CardAge = () => {
    const {person} = UseAppContext()

    return (
        <View style={{marginTop: 15, borderWidth: 1, borderColor: 'green', borderRadius: 10, padding: 5}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:"center"}}>CARD AGE</Text>
            <Text style={{textAlign:"center", fontSize: 25, }}>Age: {person.age} </Text>

            <CardSchool />

        </View>

    )

}
export default CardAge