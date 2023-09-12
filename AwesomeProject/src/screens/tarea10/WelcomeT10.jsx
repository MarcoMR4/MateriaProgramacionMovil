import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { naranjaT10 } from "../../constants/colors";
import { Octicons } from '@expo/vector-icons';
import SuggestCard from "../../components/T10/suggestCard";

import { SUGGESTS } from "../../constants/T10/Suggests";
import { PRODUCTS } from "../../constants/T10/PRODUCTS";
import ProductCard from "../../components/T10/ProductCard";


const WelcomeT10 = () => {


    return(
        
        <View style={styles.container}>
            
            <View style={styles.containerHeader}>


                <View style={styles.containerHeaderText}  >
                    <Text style={{fontSize: 30, fontWeight:"bold"}}>Discover </Text>
                    <Text style={{fontSize: 30}}>your products </Text>
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
                        }}
                        value="Divoom"
                    />
                </View>
                
                

                <TouchableOpacity style = {styles.buttomHeader}>
                    <Entypo name="flow-parallel" size={24} color="black" /> 
                </TouchableOpacity>

            </View>

            <ScrollView>
            <FlatList 
                horizontal = {true}
                data={SUGGESTS}
                renderItem={({ item:  {text } }) => (
                    <SuggestCard 
                        text={text}
                    />

                )}
            
            />
            </ScrollView>

            <ScrollView>
            <FlatList 
                horizontal = {true}
                data={PRODUCTS}
                renderItem={({ item:  {description, category, imageName, price } }) => (
                    <ProductCard
                        description = {description}
                        imgName={imageName}
                        price={price}
                        category={category}

                    />

                )}
            
            />
            </ScrollView>

          

            <Text style = {{fontSize: 25}}>
            Popular product
            </Text>




        </View>


    );
};

export default WelcomeT10

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#f0f1f1',
        flex: 1, 
        padding: 40
    },
    containerHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
    },
    containerHeaderText: {
        flexDirection: "column"
    }, 
    searchContainer: {
        flexDirection:  "row",   
        marginBottom: 20,
    },
    inputSeacrh: {
        backgroundColor: 'white', 
        borderRadius: 10,
        height: 50,
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
    }


})