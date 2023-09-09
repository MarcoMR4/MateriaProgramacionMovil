import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { blue2 } from "../constants/colors";

const Therapist = ({name, job, imageName, rate }) =>{

    return (
        <View style={styles.Container}>

            <Image
                style={styles.image}
                source={{
                    uri: imageName,
                }}
            />
            
            <View style={styles.TherapistInfo}>
                <Text style={styles.TherapistName}>{name}</Text>
                <Text style={styles.TherapistJob}>{job}</Text>

            </View>
            

            <View style={{flexDirection:"row"}}>

                {rate > 3 ? (
                    <AntDesign name='star' size={24} color={blue2} />
                ) : (
                    <AntDesign name='staro' size={24} color={blue2} />
                )}
                <Text style={{color: 'silver'}}>{rate}</Text>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    
    Container: {
       borderWidth: 1,
       borderColor: 'red',
        borderRadius: 10,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        margin: 5,
    },
    image: {
        width: 50,
        height: 50, 
        borderRadius: 50, 

    },
    TherapistInfo: {


    },
    TherapistName: {
        fontSize: 20,
        color: '#495258',
        fontWeight: "bold",
    },
    TherapistJob: {
        fontSize: 15,
    },


})


export default Therapist