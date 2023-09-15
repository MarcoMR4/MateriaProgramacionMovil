import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const PersonChatComponent = ({name, message, imageName, hour}) =>{

    return (
        <View style={styles.Container}>

            <Image
                style={styles.image}
                source={{
                    uri: imageName,
                }}
            />
            
            <View>
                <Text style={styles.chaterName}>{name}</Text>
                <Text style={styles.chaterMessage}>{message}</Text>

            </View>

            <View>
                <Text style={styles.chaterMessage}>{hour}</Text>

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
    chaterName: {
        fontSize: 20,
        color: '#495258',
        fontWeight: "bold",
    },
    chaterMessage: {
        fontSize: 15,
    },


})


export default PersonChatComponent