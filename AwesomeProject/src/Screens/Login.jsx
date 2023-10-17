import { useState } from "react";
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity, Alert } from "react-native"
import { soup } from "../../assets"
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from "../Hooks/useAuthContext";


const Login = () => {
    const navigation = useNavigation()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const { handleLogin: onLogin } = useAuthContext();
  
    const handleLogin = async () => {
        console.log(username, " y pass: ",password)
      try {
        const loginValue = onLogin(username, password);
        if (loginValue) {
            setPassword("");
            setUsername("");
        } else {
          Alert.alert("Error", "Credenciales invalidas", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    return (
        <View style={{flex: 1}}>

            <Image 
                source={soup}
                style={styles.image}
            />
            <View style={styles.container}>
                <Text style={{fontWeight: "bold", fontSize: 30, color: '#7e7e7e'}}>Welcome!</Text>
                <Text style={styles.labelInput}>User</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your user"
                    value={username} 
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={styles.labelInput}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => (setPassword(text))}
                />

                <TouchableOpacity>
                    <Text style={{fontSize: 13, fontWeight: "bold", color: '#21b2b2', textAlign: "right", marginTop: 20,}}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
                

                <TouchableOpacity
                
                onPress={() => handleLogin()}
                >
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
                    
                    <TouchableOpacity
                        onPress={() => (navigation.navigate("SignUp"))}
                    >
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
