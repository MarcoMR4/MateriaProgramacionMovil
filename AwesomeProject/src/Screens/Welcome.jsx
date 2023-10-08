import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from "react-native"
import { welcomeImage } from "../../assets"
import { useNavigation } from '@react-navigation/native';




const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Image 
                source={welcomeImage}
                style={styles.image}
            />
            <View style={styles.container}>
                <Text style={{fontWeight: "bold", fontSize: 25, textAlign: "center"}}>
                    Shopping with best e-commerce store
                </Text>

                <Text style={{fontWeight: "normal", fontSize: 12, textAlign: "center", marginTop: 10, color: '#757578'}}>
                    Find best shopping experience with us by your favorite daily needs!
                </Text>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('Menu')}
                >
                <View style={{alignItems: "center"}}>
                <Text 
                        style={{
                            fontSize: 18, 
                            backgroundColor: '#21b2b2', 
                            color: 'white',
                            width: '100%',
                            height: 60,
                            borderRadius: 15,
                            textAlign: 'center',
                            verticalAlign: "middle",
                            fontWeight: 'bold',
                            marginTop: 40,
                        }}>
                        Get started!
                    </Text>
                </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Welcome


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: 'white',
    },
    image:{
        width: '100%', 
        height: 400,
        marginTop: 20,
    }, 

 
})
