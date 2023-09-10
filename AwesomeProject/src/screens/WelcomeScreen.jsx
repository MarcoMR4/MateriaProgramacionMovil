import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import SymptomCard from "../components/SymptomCard";
import Therapist from "../components/Therapist";
import { CARDS } from "../constants/cards";
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { blue1, blue2 } from "../constants/colors";
import { Therapists } from "../constants/terapists";
import { SYMPTOMS } from "../constants/symptoms";


const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={40} color="#3764c2" />
        </TouchableOpacity>

          <Image
            style={styles.headerImage}
            source={{
              uri: "https://shmector.com/_ph/6/907397949.png",
            }}
          />

      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello,</Text>
        <Text style={{ color: "#2b3941" }}>Chris 👋</Text>
      </Text>
      <ScrollView
        style={{ marginBottom: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        <FlatList 
          data={CARDS}
          horizontal={true}
          renderItem={({ item:  {isDarkBlue, text, iconName, iconType } }) => (

            
            <TouchableOpacity>
               <Card 
                isDarkBlue={isDarkBlue} 
                text={text} 
                iconName={iconName}
                iconType={iconType} 
              />
            </TouchableOpacity>

          )}
        />

      </ScrollView>
      <Text style={styles.textHeader}>What are your symptoms?</Text>

      <ScrollView
        style={styles.symptomsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >

          <FlatList 
            horizontal={true}
            data={SYMPTOMS}
            renderItem={({ item:  {text, emoji } }) => (
              
              <TouchableOpacity>
                <SymptomCard
                  text={text}
                  emoji={emoji}
                />
              </TouchableOpacity>
              
            )}
          />  
      
      </ScrollView>



      <Text style={styles.textHeader}>
        Popular Therapist
      </Text>

      <ScrollView 
        style={styles.scrollContainerTherapists} 
        showsVerticalScrollIndicator={false}
      >

        <FlatList 
          data={Therapists}
          renderItem={({ item:  {name, job, imageName, rate } }) => (

            <TouchableOpacity>
               <Therapist 
                name={name} 
                job={job} 
                imageName={imageName}
                rate={rate} 
              />
            </TouchableOpacity>

          )}
        />  
      </ScrollView>  

      <View style={styles.lastBottomContainer}>
        <TouchableOpacity>
         <Entypo name="home" size={30} color={blue2} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="message-reply-outline" size={30} color="silver" />
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

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#495258",
    marginBottom: 10,
  },
  symptomsContainer: {
    height: 60,
    paddingHorizontal: 1,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 25,
  },
  lastBottomContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 1,

  }, 
  scrollContainerTherapists: {
    height: 185,
  }


});