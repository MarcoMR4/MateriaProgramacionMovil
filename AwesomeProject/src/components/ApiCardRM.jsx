import { StyleSheet, Text, View, Image } from "react-native"
import { FontAwesome } from '@expo/vector-icons';



const ApiCardRM = ({name, status, location, image, gender, species, first}) => {
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
                    color= {status == 'Alive' ? '#55cc44' : status == 'Dead' ? '#d63d2e': 'silver'} 
                    style={{marginTop: 5}}
                />
                <Text style={styles.textStatus}>{status} - {species}</Text>
            </View>
            <Text style={{color: 'silver', fontWeight:"bold"}}>
                Last known location: 
            </Text>
            <Text style={styles.textNormal} numberOfLines={3}>{location}</Text>
            <Text style={{color: 'silver', fontWeight:"bold", marginTop: 20,}}>
                First seen in: 
            </Text>
            <Text style={styles.textNormal} numberOfLines={3}>{first}</Text>
            <Text style={{color: 'white'}}>
                <Text style={{color:(gender=='Male' ? '#48C2F3': gender=='Female'?'pink':'silver')}}>
                {gender}
                </Text>
            </Text>
        </View>

    </View>

    )
   
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", 
        backgroundColor: '#3c3e44',
        margin: 5,
        gap: 5,
        height: 250,
        borderRadius: 10,
    }, 
    picture: {
        width: 120, 
        height: 120,
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
        fontSize: 11,
    }

})

export default ApiCardRM