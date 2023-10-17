import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";

const Account = () => {
  const navigation = useNavigation();
  const { handleLogOut: onLogOut, user } = useAuthContext();

  const handleLogOut = async () => {
    try {
      onLogOut();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: "center", fontWeight: "bold", marginBottom: 20}}>Account</Text>
      <Text style={{fontSize: 20, textAlign: "justify"}}>Welcome: {user}</Text>
      <Button title="Cerrar sesion" onPress={() => handleLogOut()} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});