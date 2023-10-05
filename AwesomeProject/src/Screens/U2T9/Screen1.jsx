
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../Components/U2T9/Card";

const Screen1 = () => {
    return (
        <View style={styles.container}>
            
            <Text style={{fontSize: 40, color: 'white', marginBottom: 20}}>My cards</Text>

            <ScrollView horizontal>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#edf893',
                            height: 180,
                            width: 80,
                            borderRadius: 30,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 10,
                        }}>
                            <Text style={{fontSize:25}}>+</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#ffffff',
                            height: 180,
                            width: 220,
                            borderRadius: 30,
                            alignContent: "space-between",
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                            marginRight: 10,
                            padding: 20,
                            marginBottom: 20,
                        }}>
                            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                                <MaterialCommunityIcons name="google-circles" size={24} color="black" />
                                <Text style={{fontSize:20, color: '#9a9a9b'}}>**** 4934</Text>
                            </View>
                            <Text style={{fontSize: 30,}}>$13,327.<Text style={{fontSize: 20}}>23</Text></Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#516bea',
                            height: 180,
                            width: 240,
                            borderRadius: 30,
                            alignContent: "space-between",
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                            marginRight: 10,
                            padding: 20,
                        }}>
                            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                                <MaterialCommunityIcons name="google-circles" size={24} color="black" />
                                <Text style={{fontSize:20, color: '#9a9a9b'}}>**** 4934</Text>
                            </View>
                            <Text style={{fontSize: 30,}}>$13,327.<Text style={{fontSize: 20}}>23</Text></Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
                
            </ScrollView>

            <ScrollView>
                <View style={{flexDirection: "row", marginBottom: 20,}}>
                    <TouchableOpacity><Card text='Send' iconName="email-send" /></TouchableOpacity>
                    <TouchableOpacity><Card text='Receive' iconName="email-receive" /></TouchableOpacity>
                    <TouchableOpacity><Card text='Swap' iconName="refresh" /></TouchableOpacity>
                </View>
            </ScrollView>

            <View style={{flexDirection: "row"}}>
                <Text style ={{
                    padding: 12,
                    alignItems: "center",
                    textAlign: "center",
                    borderWidth: 1,
                    borderColor: '#edf893',
                    color: 'white',
                    borderRadius: 30,
                    width: 88,
                    height: 50,
                    marginRight: 6,
                    fontSize: 11,
                }}>
                    Activity
                </Text>
                <Text style ={{
                    padding: 12,
                    alignItems: "center",
                    textAlign: "center",
                    borderWidth: 1,
                    borderColor: '#edf893',
                    color: 'white',
                    borderRadius: 30,
                    width: 88,
                    height: 50,
                    marginRight: 7,
                    fontSize: 11,
                }}>
                    Contacts
                </Text>
                <Text style ={{
                    padding: 12,
                    alignItems: "center",
                    textAlign: "center",
                    borderWidth: 1,
                    borderColor: '#edf893',
                    color: 'white',
                    borderRadius: 30,
                    width: 88,
                    height: 50,
                    marginRight: 6,
                    fontSize: 11,
                }}>
                    Payments
                </Text>
                <Text style ={{
                    padding: 12,
                    alignItems: "center",
                    textAlign: "center",
                    borderWidth: 1,
                    borderColor: '#edf893',
                    color: 'white',
                    borderRadius: 30,
                    width: 88,
                    height: 50,
                    marginRight: 6,
                    fontSize: 11,
                }}>
                    Sale
                </Text>
            </View>
            
            
  



        </View>
    )
}
export default Screen1

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#0d0d0d',
        padding: 20,

    }, 

})