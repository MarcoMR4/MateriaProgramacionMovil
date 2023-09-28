import React from "react"
import { Text, View, StyleSheet, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/CustomHeader";
import { AntDesign, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Ticket from "../../components/unidad2/tarea6/Ticket";
import RateCard from "../../components/unidad2/tarea6/RateCard";


const TicketScreen = ({navigation, route}) => {
    const navigation1 = useNavigation()
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const segs = currentDate.getSeconds();
    const hourFormat = `${hour}:${minutes}:${segs}`;

    const ticketsData = [
        {
          ticketNumber: 1,
          numbers: [5, 10, 15, 20],
        },
      ];


    return (
        <View style={styles.container}>
            <CustomHeader title='$234 000 000' subtitle='uroMillions' />

            <View style={styles.today}>
                <AntDesign name="calendar" size={30} color="black" />
                <Text style={{fontSize: 18, marginLeft: 5, marginRight: 20,}}>Today</Text>
                <Feather name="clock" size={30} color="black" />
                <Text style={{fontSize: 18, marginLeft: 5, marginRight: 20,}}>{hourFormat}</Text>
            </View>

            <Ticket  ticketNumber='1' numbers={[1, 7, 14, 16, 19, 41]} />
 
            <View style={{flexDirection: "row", marginTop: 10}}>
                <RateCard type='One time bed' />
                <RateCard type='Suscription' />
            </View>
            
            <TouchableOpacity>
                <View style={styles.buttonDown}>
                    <Text style={{fontSize: 18, color:'white', textAlign:"center"}}>Watch Results</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}
export default TicketScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecdcc2',
        flex: 1,
        alignItems:"center",
    },
    today: {
        width: '70%', 
        height: 70,
        backgroundColor: '#e3cfac',
        borderRadius: 20,
        flexDirection: "row",
        padding: 20,
        marginBottom: 20,
    }, 
    buttonDown: {
        backgroundColor: '#046e48', 
        width: 250, 
        height: 70, 
        borderRadius: 20,
        paddingTop: 18,
        marginTop: 110,
    }
})
