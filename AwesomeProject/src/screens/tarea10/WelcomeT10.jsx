import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { GRISTASK10BG, naranjaT10 } from "../../constants/colors";
import { PRODUCTS } from "../../constants/T10/PRODUCTS";
import ProductCard from "../../components/T10/ProductCard";
import { Octicons } from '@expo/vector-icons';
import { Ionicons, AntDesign, Feather,  SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { BLACKT10 } from "../../constants/colors";
import { SUGGEST } from "../../constants/T10/SUGGEST";
import SuggCard from "../../components/T10/SuggCard";

const WelcomeT10 = () => {


    return(
        
        <View style={styles.container}>
            
            <View style={styles.containerHeader}>


                <View style={styles.containerHeaderText}  >
                    <Text style={{fontSize: 30, fontWeight:"bold", color: BLACKT10}}>
                        Discover 
                    </Text>
                    <Text style={{fontSize: 30, color: BLACKT10}}>your products </Text>
                </View>

                    
                <Image 
                    style = {{
                        width: 50, 
                        height: 50,
                        borderRadius: 50,
                    }}
                    source={{uri: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png'}}
                />

            </View>

            <View style={styles.searchContainer}>

                <View style={styles.inputSeacrh}>
                    <Octicons name="search" size={24} color="black" />
                    <TextInput 
                        style = {{
                            marginLeft: 10,
                            height: '110%',
                            padding: 10,
                            width: '100%'
                        }}
                        placeholder="Divoom"
                    />
                </View>
                
                

                <TouchableOpacity style = {styles.buttomHeader}>
                    <Entypo name="flow-parallel" size={24} color="black" /> 
                </TouchableOpacity>

            </View>


            <ScrollView>
                <FlatList 
                    horizontal = {true}
                    data={SUGGEST}
                    renderItem={({ item:  {text } }) => (
                        <TouchableOpacity>
                            <SuggCard 
                                text={text}
                            />
                        </TouchableOpacity>
                    )}
                /> 
            </ScrollView>

            <Text style = {{fontSize: 25, marginTop: 20, marginBottom:20}}>
                Popular product
            </Text>

            <ScrollView >
            <FlatList 
                horizontal = {true}
                data={PRODUCTS}
                renderItem={({ item:  {description, category, imageName, price } }) => (
                    <TouchableOpacity >
                        <ProductCard
                            description = {description}
                            imgName={imageName}
                            price={price}
                            category={category}

                        />
                    </TouchableOpacity>
                    
                )}
            
            />
            </ScrollView>

          

          

            <View style={styles.bottomMenu}>
                <TouchableOpacity>
                    <View
                        style={{
                            backgroundColor: BLACKT10,
                            width: 50,
                            height: 50,
                            borderRadius: 10,
                            alignItems: "center", 
                            padding: 10
                        }}
                    >
                        <Ionicons name="home-outline" size={24} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View
                        style={styles.buttomBottomMenu}
                    >
                        <SimpleLineIcons name="bag" size={24} color={BLACKT10} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View
                        style={styles.buttomBottomMenu}
                    >
                        <Feather name="bell" size={24} color={BLACKT10}  />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View
                        style={styles.buttomBottomMenu}
                    >
                        <AntDesign name="user" size={24} color={BLACKT10} />
                    </View>
                </TouchableOpacity>

            </View>




        </View>


    );
};

export default WelcomeT10

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: GRISTASK10BG,
        flex: 1, 
        padding: 30
    },
    containerHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    containerHeaderText: {
        flexDirection: "column"
    }, 
    searchContainer: {
        flexDirection:  "row",   
        marginBottom: 10,
        padding: 10,
    },
    inputSeacrh: {
        backgroundColor: 'white', 
        borderRadius: 10,
        height: 60,
        padding: 10,
        marginRight: 20,
        width: '80%',
        flexDirection: "row",
    }, 
    buttomHeader: {
        backgroundColor: naranjaT10,
        width: 45,
        height: 45, 
        borderRadius: 10,
        padding: 8,
        alignItems: "center",
    },
    bottomMenu:{
        flexDirection: "row", 
        marginTop: 20,
        padding: 5,
        justifyContent: "space-between"
    }, 
    buttomBottomMenu: {
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: "center", 
        padding: 5
    }


})