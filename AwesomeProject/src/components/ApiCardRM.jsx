import { StyleSheet, Text, View, Image, Button } from "react-native"
import { FontAwesome } from '@expo/vector-icons';



const ApiCardRM = ({name, status, location, image, gender, 
    species, first, navigation, type, episode,created}) => {
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
            <View style={{flexDirection: "column"}}>
                <Text style={{color: 'white'}}>
                    <Text style={{color:(gender=='Male' ? '#48C2F3': gender=='Female'?'pink':'silver')}}>
                    {gender}
                    </Text>
                </Text>
                <Button title='See info' 
                    onPress={() => navigation.navigate('Character', {
                        name: name, 
                        status:status,
                        specie:species,
                        firstSeen: first, 
                        lastLocation: location,
                        image: image,
                        gender: gender,
                        type: type,
                        episode: episode,
                        created: created,
                    })}
                    color="gray"
                />

            </View>
           
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
        height: 280,
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