import { StyleSheet, Text, View, Image } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";



const ApiCardRM = ({name, ocupacion, image, status, historia}) => {
    return (
        <View style={styles.container}>
        <Image 
            style={styles.picture}
            source={{uri: image}}
        />
        <View style={styles.infoContainer}>
            <Text numberOfLines={2} style={styles.textName}>{name}</Text>
            <View style={{flexDirection: "row"}}>
                <FontAwesome 
                    name="circle" 
                    size={15} 
                    color= {status == 'Vivo' ? '#55cc44' : 'silver'} 
                    style={{marginTop: 5}}
                />
                <Text style={styles.textStatus}>{status}</Text>
            </View>
            <Text style={{color: 'silver', fontWeight:"bold"}}>
                Ocupación: 
            </Text>
            <Text style={styles.textNormal} numberOfLines={3}>{ocupacion}</Text>

            <Text style={{color: 'silver', fontWeight:"bold"}}>
                    Historia: 
            </Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
                 <Text style={styles.textNormal} numberOfLines={10}>{historia}</Text>
            </ScrollView>
            
            
        </View>

    </View>

    )
   
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", 
        backgroundColor: '#3c3e44',
        margin: 3,
        width: '100%',
        height: 300,
        borderRadius: 10,
    }, 
    scrollContainer: {
        paddingHorizontal: 5, // Espacio en los lados para mejorar la apariencia
    },
    picture: {
        marginTop: 40,
        width: 150, 
        height: 240,
    },
    infoContainer:{
        padding: 10,
        
    }, 
    textName: {
        fontWeight: "bold",
        color: 'white'

    },
    textStatus: {
        color: 'white',
        marginBottom: 20,
        marginLeft: 10,
    }, 
    textNormal: {
        color: 'white', 
        marginBottom: 10, 
        marginTop: 3, 
        gap: 5,
        fontSize: 13,
    }

})

export default ApiCardRM