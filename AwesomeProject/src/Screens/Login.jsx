import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from "react-native"
import { soup } from "../../assets"

const Login = () => {

    return (
        <View style={{flex: 1}}>

            <Image 
                source={soup}
                style={styles.image}
            />
            <View style={styles.container}>
                <Text style={{fontWeight: "bold", fontSize: 30, color: '#7e7e7e'}}>Welcome!</Text>
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
                        Login
                    </Text>
                </View>
                </TouchableOpacity>

                <View style={{flexDirection: "row", marginTop: 20, justifyContent:"center", marginBottom: 60,}}>

                    <Text>Dont have an account?  </Text>
                    
                    <TouchableOpacity>
                        <Text style={{color: '#21b2b2', textDecorationLine: "underline" }}>Sign Up</Text>
                    </TouchableOpacity>
                    


                </View>



            </View>

        </View>
    )
}
export default Login 


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: 'white'
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
