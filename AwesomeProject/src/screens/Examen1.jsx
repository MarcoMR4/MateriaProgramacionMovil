import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { blue1, blue2 } from "../constants/colors";
import { person1 } from "../../assets";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import PersonChatComponent from "../components/Ex1/PersonChatComponent";
import { PersonChat } from "../constants/PersonChat";




const Examen1 = () => {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>

        <Image 
            source={person1}
            style={{ width: 40, height: 40, borderRadius: 40}}
        />



        <Text style= {styles.headerText}>
            Hey Alierza! 😅
        </Text>

        <FontAwesome name="search" size={24} color="black" />
        <FontAwesome5 name="squarespace" size={24} color="black" />

        </View>
            
        <View style={styles.containerFlat1} >


            <Text style={styles.headerContainerFlat1}>
                Stories
            </Text>

            <ScrollView 
            >
            <FlatList 
                data={PersonChat}
                renderItem={({ item:  {name, message, imageName, hour } }) => (
            
                    <PersonChatComponent 
                      name={name} 
                      message={message} 
                      imageName={imageName}
                      hour={hour} 
                    />
                    )}
                /> 

        </ScrollView>

           
                    
        </View>




        <View style={styles.lastBottomContainer}>
        <TouchableOpacity>
         <Entypo name="home" size={30} color={blue2} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="message-reply-outline" size={30} color="silver" />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="plussquare" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
         <AntDesign name="calendar" size={30} color="silver" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={30} color="silver" />
        </TouchableOpacity>
        </View>
              


      
        
    </View>
  );
};

export default Examen1;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    padding: 20,
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row", 
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 30,
  },
  headerText: {
    fontWeight:"bold",
    fontSize: 20,
  },
  
  containerFlat1: {

  }, 
  
  headerContainerFlat1: {
    color: 'silver', 
    fontSize: 20,
  }, 

  lastBottomContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 1,

  }, 
});