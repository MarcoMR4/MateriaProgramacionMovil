import { View, Text, TouchableOpacity } from "react-native";
import { UseAppContext } from "../Hooks/UseAppContext";


const CardSchool = () => {
    const {person, handleIsActive} = UseAppContext()

    return (
        <View style={{marginTop: 15, borderWidth: 1, borderColor: 'purple', borderRadius: 10, padding: 10}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:"center"}}>CARD SCHOOL</Text>
            <Text style={{textAlign:"center", fontSize: 25, }}>School: {person.school} </Text>

            <TouchableOpacity
                onPress={handleIsActive}
                style={{backgroundColor: 'blue', padding: 5, borderRadius: 10}}
            >
                <Text style={{textAlign:'center', fontSize: 15, color:'white'}}>
                    Is active: {JSON.stringify(person.isActive)}
                </Text>
            </TouchableOpacity>
            
        </View>

    )

}
export default CardSchool