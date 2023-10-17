
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../Hooks/useAuthContext";

const Account = () => {
  const navigation = useNavigation();
  const { handleLogOut: onLogOut, user } = useAuthContext();

  const handleLogOut = () => {
    try {
      onLogOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text style={{textAlign: "center", fontSize: 30, fontWeight: "bold", marginBottom: 20}}>Account</Text>
      <Text style={{textAlign: "center", fontSize: 20,  marginBottom: 20}}>User: {user}</Text>
      <Button title="Logout" onPress={() => handleLogOut()} />
    </View>
      
      
  );
};

export default Account;

const styles = StyleSheet.create({});