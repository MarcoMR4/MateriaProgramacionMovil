import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const navigation = useNavigation();
  const { handleLogOut: onLogOut } = useAuthContext();

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
      <Text>Home</Text>
      <Button
        title="Ir a mi cuenta"
        onPress={() => navigation.navigate("Account")}
      />
      <Button title="Cerrar sesion" onPress={() => handleLogOut()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});