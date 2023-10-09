import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import TabNavigatorExam from "../Routes/TabNavigatorExam";
import { FlatList } from "react-native";
import ImageExam1 from "../Components/imageExam1";
// import UpCardExam from "../Components/upCardExam";

const Screen1Exam = () => {
    const navigation = useNavigation();
    const img1 = 'https://icon-library.com/images/icon-of-person/icon-of-person-19.jpg'

    const places = [
        {name: 'place1', img: 'https://img.freepik.com/premium-photo/serene-natural-background-depicting-peaceful-landscape-scenery-ai-generated_523886-6825.jpg'},
        {name: 'place2', img: 'https://e7.pngegg.com/pngimages/660/660/png-clipart-landscape-graphy-of-mountain-range-lugu-lake-caohai-lake-yanyuan-county-fukei-landscape-lugu-lake-caohai-landscape-five-natural-grass.png'},
        {name: 'place3', img: 'https://as2.ftcdn.net/v2/jpg/05/50/61/75/1000_F_550617518_Eu3U6kTl3mODPvnfTMFHQ88z1y5KNfNQ.jpg'},
        {name: 'place4', img: 'https://www.usnews.com/object/image/00000186-7a58-d975-aff7-fffbc8910000/iguazu-falls-stock.jpg?update-time=1677089883729&size=responsive970'},
        {name: 'place5', img: 'https://en.wikipedia.org/wiki/Cultural_landscape#/media/File:Neckertal_20150527-6384.jpg'},
    ]

    const cards = [
        {text:  'All'},
        {text:  'New'},
        {text:  'All places'},
    ]

    return (
        <View style={styles.container}>

            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={{fontWeight: "bold", fontSize: 22, marginTop: 20, color: 'white'}}>
                        Snap Sync
                </Text>
                <Image 
                    source= {{uri: img1}}
                    style={{width: 40, height: 40, borderRadius: 30, marginTop: 20,}}
                />

            </View>

            <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Search"
                    />   
                    <Ionicons name="ios-search" size={24} color="gray" style={styles.icon} />
                   
            </View>

            <View style={{flexDirection: "row", marginTop: 10, marginBottom: 10}}>
            {/* <FlatList 
                horizontal
                data={cards}
                renderItem={({ item: { text } }) => (
                    <UpCardExam 
                        text={text}
                    />
                )}
            /> */}

            </View>

            <Text style={{fontWeight: "bold", fontSize: 22, marginTop: 20, color: 'white'}}>
                        Collections
            </Text>

            <View style={{flexDirection: "row", marginTop: 20}}>
            <FlatList 
                horizontal
                data={places}
                renderItem={({ item: { name, img } }) => (
                <ImageExam1 
                    name={name}
                    img={img}
                />
                )}
            />

            </View>


                

        </View>
    )
}
export default Screen1Exam


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#1f1d2b",
        flex: 1
    },
    image:{
        width: '100%', 
        height: 400,
        marginTop: 20,
    }, 
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252837',
        marginTop: 20,
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 10, // Espacio horizontal para el icono
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
    icon: {
        marginRight: 10, // Espacio a la derecha del icono
    },

 
})
