import { View, StyleSheet, ActivityIndicator, Image, Text, TouchableOpacity } from "react-native"
import { welcomeImage } from "../../assets"
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from "../Hooks/useAuthContext";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';


const Welcome = () => {

    const navigation = useNavigation();
    const { user } = useAuthContext();

    const [isFetching, setIsFetching] = useState(false)
    //const delay = ms => new Promise(res => setTimeout(res, ms));

    const charge = () => {
        setIsFetching(true);
        setTimeout(() => {
            setIsFetching(false);
            if (user) {
                navigation.navigate('Home');
            } else {
                navigation.navigate('Login');
            }
        }, 3000); 
    }

    const handleGetStarted = () => {
        charge()
        if (isFetching) {
            return (
                <View>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color="black" />
                        <Text style={{ fontSize: 15, color: 'black', marginTop: 5 }}>Loading...</Text>
                    </View>
                </View>
            );
        } else if (user) {
            navigation.navigate('Home'); 
        } else {
            navigation.navigate('Login'); 
        }
    }

    return (
        <View>
            <Image
                source={welcomeImage}
                style={styles.image}
            />
            <View style={styles.container}>
                <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}>
                    Shopping with the best e-commerce store
                </Text>

                <Text style={{ fontWeight: "normal", fontSize: 12, textAlign: "center", marginTop: 10, color: '#757578' }}>
                    Find the best shopping experience with us for your favorite daily needs!
                </Text>

                <TouchableOpacity onPress={handleGetStarted}>
                    <View style={{ alignItems: "center" }}>
                        {isFetching ? (
                            <View>
                                <ActivityIndicator size="large" color="black" />
                                <Text style={{ fontSize: 15, color: 'black', marginTop: 5 }}>Loading...</Text>
                            </View>
                        ) : (
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
                        )}
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
