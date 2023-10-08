import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const SignUp = () => {

    return (
        <View>
            <View style={styles.container}>

                <TouchableOpacity>
                    <Ionicons name="arrow-back-outline" size={30} color="#7e7e7e" />
                </TouchableOpacity>

                
                <Text style={{fontWeight: "bold", fontSize: 30, marginTop: 50, color: '#7e7e7e'}}>Sign Up</Text>

                <View style={{flexDirection: "row", marginTop: 20, justifyContent:"center",}}>
                    <Text>Already have an account?  </Text>
                    <TouchableOpacity>
                        <Text style={{color: '#21b2b2', textDecorationLine: "underline" }}>Login</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.labelInput}>Name</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your name"
                />
                <Text style={styles.labelInput}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your email"
                />
                <Text style={styles.labelInput}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry
                />

                <TouchableOpacity>
                    <Text style={{fontSize: 13, fontWeight: "bold", color: '#21b2b2', textAlign: "right", marginTop: 20,}}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
                

                <TouchableOpacity>
                <View style={{alignItems: "center"}}>
                <Text 
                        style={{
                            fontSize: 15, 
                            backgroundColor: '#21b2b2', 
                            color: 'white',
                            width: '100%',
                            height: 50,
                            borderRadius: 20,
                            textAlign: 'center',
                            verticalAlign: "middle",
                            fontWeight: 'bold',
                            marginTop: 30,
                        }}>
                        Sign Up
                    </Text>
                </View>
                </TouchableOpacity>

               



            </View>

        </View>
    )
}
export default SignUp


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingTop: 40,

    },
    image:{
        width: '100%', 
        height: 250,
    }, 
    
    labelInput:{
        fontWeight: "bold", 
        fontSize: 15,
        marginTop: 20,
        color: '#686868',
    }, 
    input:{
        borderWidth: 1, 
        borderColor: '#686868', 
        borderRadius: 15,
        height: 60,
        marginTop: 10,
        padding: 10,
    }
    
})
