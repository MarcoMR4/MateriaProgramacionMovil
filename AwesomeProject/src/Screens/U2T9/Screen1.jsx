import { useGlobalContext } from "../../Context/ThemeContext";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../Components/U2T9/Card";
import CardContact from "../../Components/U2T9/CardContact";
import { CONTACTS } from "../../Constants/contacts";
import { useNavigation } from "@react-navigation/native";


const Screen1 = () => {
    let {globalState} = useGlobalContext();

    let mainBackgroundColor = {
        backgroundColor : globalState.bgColor,
    }

    let cardBackgroundColor ={
        backgroundColor : globalState.cardOptionsColor
    }

    let fontColorStyle = {
        borderColor: globalState.cardOptionsFontColor,
        color: globalState.fontColor,
    }

    const navigation = useNavigation();
    return (
            <View style={[styles.container, mainBackgroundColor]}>
            <Text style={[{fontSize: 40, marginBottom: 20}, fontColorStyle]}>My cards</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#edf893',
                            height: 160,
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
                        <View style={[{
                            height: 160,
                            width: 220,
                            borderRadius: 30,
                            alignContent: "space-between",
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                            marginRight: 10,
                            padding: 20,
                            marginBottom: 20,
                        }, cardBackgroundColor]}>
                            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                                <MaterialCommunityIcons name="google-circles" size={24} color={globalState.fontColor} />
                                <Text style={{fontSize:20, color: '#9a9a9b'}}>**** 4934</Text>
                            </View>
                            <Text style={[{fontSize: 30,}, fontColorStyle]}>$13,327.<Text style={{fontSize: 20}}>23</Text></Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#516bea',
                            height: 160,
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
                <View style={{flexDirection: "row", marginBottom: 30, marginTop: 20}}>
                    <TouchableOpacity><Card text='Send' iconName="email-send" /></TouchableOpacity>
                    <TouchableOpacity><Card text='Receive' iconName="email-receive" /></TouchableOpacity>
                    <TouchableOpacity><Card text='Swap' iconName="refresh" /></TouchableOpacity>
                </View>
            </ScrollView>

            <View style={{flexDirection: "row", paddingBottom:20}}>
                <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
                    <Text style ={[{
                        padding: 12,
                        alignItems: "center",
                        textAlign: "center",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: 88,
                        height: 50,
                        marginRight: 6,
                        fontSize: 11,
                    }, fontColorStyle]}>
                        Activity
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style ={[{
                        padding: 12,
                        alignItems: "center",
                        textAlign: "center",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: 88,
                        height: 50,
                        marginRight: 7,
                        fontSize: 11,
                    }, fontColorStyle]}>
                        Contacts
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Screen3")}>
                    <Text style ={[{
                        padding: 12,
                        alignItems: "center",
                        textAlign: "center",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: 88,
                        height: 50,
                        marginRight: 6,
                        fontSize: 11,
                    }, fontColorStyle]}>
                        Payments
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style ={[{
                        padding: 12,
                        alignItems: "center",
                        textAlign: "center",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: 88,
                        height: 50,
                        marginRight: 6,
                        fontSize: 11,
                    }, fontColorStyle]}>
                        Sale
                    </Text>
                </TouchableOpacity>
            </View>
            
            <View style={[{...styles.bottomContainer}, cardBackgroundColor]}>
                <Text style={[{margin: 10,}, fontColorStyle]}>My contacts</Text>
                <FlatList 
                    data={CONTACTS}
                    renderItem={({item: {name, img, code}}) => (
                        <TouchableOpacity>
                             <CardContact 
                                name={name}
                                img={img}
                                code={code}
                             />
                        </TouchableOpacity>
                    )}
                />

            </View>
        </View>       
    )
}
export default Screen1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    }, 
    bottomContainer: {
        borderRadius: 20,
        marginTop: 5,
        width: '100%', 
        height: 230,
        paddingHorizontal: 0,
    },
})