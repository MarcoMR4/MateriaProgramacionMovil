import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";
import { LIGHTGREEN1, LIGHTPURPLE1 } from "../constants/colors";
import { Octicons, Feather  } from '@expo/vector-icons';


const Todo1 = ({ name, id, isDone }) => {

    return (
        <View style={[
            styles.container,
            { backgroundColor: id % 2 == 0 ? LIGHTGREEN1: LIGHTPURPLE1 },
          ]}>
            
            <View style={{flexDirection:"row", gap: 10}}>
            {
                isDone? (
                    <Octicons name="tasklist" size={24} color="black" /> ) : (

                    <Feather name="square" size={24} color="black" />
                )
            }
            <Text style={{fontSize:15, fontWeight: "bold", color:'green'}}>
                {name}
            </Text>

            </View>

            <View style={{flexDirection:"row", gap: 10}}>
                <CustomButton text='Delete' light />
                <CustomButton text='Edit' light />

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column", 
        marginTop: 30,
        justifyContent: "space-between", 
        padding: 15, 
        borderRadius: 5, 
        borderColor: 'white',
        width: '45%', 
        height: 200,
        marginHorizontal: 10,
    }, 

})

export default Todo1