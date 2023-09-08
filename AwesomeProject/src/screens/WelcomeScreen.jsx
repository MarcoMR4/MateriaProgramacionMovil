import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import SymptomCard from "../components/SymptomCard";
import Therapist from "../components/Therapist";
import { CARDS } from "../constants/cards";

const IMAGE = "https://shmector.com/_ph/6/907397949.png"

const Therapists = [
  {id: 1, name: "Marco", job:"neuroTherapist", rate: 5},
  {id: 2, name: "Dr. Carol Smith", job:"Phsicologist", rate: 4},
  {id: 3, name: "Rodrigo Perez", job:"neuroTherapist", rate: 4.5},
  {id: 4, name: "Dr. Alexander", job:"Therapist", rate: 1},

]



const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="notifications-outline" size={40} color="#3764c2" />
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
        style={{ marginBottom: 40 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Card
          isDarkBlue
          text="Start "
          iconName={"hdd"}
          iconType={"FontAwesome5"}
        />
        <Card
          isDarkBlue={false}
          text="Start training2"
          iconName={"hdd"}
          iconType={"AntDesign"}
        />
        <Card
          isDarkBlue
          text="Start training3"
          iconName={"hdd"}
          iconType={"AntDesign"}
        />
        <Card
          isDarkBlue={true}
          text="Start training4"
          iconName={"hdd"}
          iconType={"AntDesign"}
        />
      </ScrollView>
      <Text style={styles.textHeader}>What are your symptoms?</Text>

      <ScrollView
        style={styles.symptomsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
          <SymptomCard text="I'm fine" />
          <SymptomCard text="I'm fine" />
          <SymptomCard text="I'm fine" />
          <SymptomCard text="I'm fine" />
          <SymptomCard text="I'm fine" />
      </ScrollView>



      <Text style={styles.textHeader}>
        Popular Therapist
      </Text>


      
      <Therapist 
        name = "Carlos"
        job = "Gonzalez"
        imageName="https://shmector.com/_ph/6/907397949.png"
        rate = {5} 
      />


      <FlatList 
        data={Therapists}
        
        
        renderItem={({ item:  {name} }) => (
          
          <Therapist />
          
         
          )}
        />
        

  
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
    marginBottom: 20,
  },
  symptomsContainer: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 25,
  },
});