import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { Ionicons, AntDesign } from '@expo/vector-icons';
import FoodOption from "../Components/FoodOption";
import Food from "../Components/Food";
import TabNavigatorT10 from "../Routes/TabNavigatorT10";

const Menu = () => {

    return (
        <View>
            
            <View style={styles.container}>

                <Text style={{fontWeight: "bold", fontSize: 22, textAlign: "center", marginTop: 20}}>
                    Store for fast food & etc.
                </Text>

               
                <View style={styles.inputContainer}>
                    <Ionicons name="ios-search" size={24} color="#21b2b2" style={styles.icon} />
                    <TextInput 
                        style={styles.input}
                    />   
                    <AntDesign name="bars" size={28} color="black" />
                </View>
  
                

                <ScrollView contentContainerStyle={{flexDirection: "row", marginTop: 60,}} horizontal={true} >
                    <TouchableOpacity>
                        <FoodOption isSelected={true} text={'Burguers'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FoodOption isSelected={false} text={'Snacks'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FoodOption isSelected={false} text={'Drinks'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FoodOption isSelected={false} text={'Desserts'} />
                    </TouchableOpacity>
                    
                </ScrollView>

                <ScrollView contentContainerStyle={{flexDirection: "row", marginTop: 60,}} horizontal={true} >
                    <Food  name={'Chicken Burguer'} price={'$24.99'} />
                    <Food  name={'Beef Burguer'} price={'$34.99'} />
                </ScrollView>
                    
               

               

            </View>

        
        </View>
    )
}
export default Menu


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: 'white',
    },
    image:{
        width: '100%', 
        height: 400,
        marginTop: 100,
    }, 
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f6f6',
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
