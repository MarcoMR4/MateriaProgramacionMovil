import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({
  user: "",
});

import React from "react";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogin = async (username, password) => {
    if (username === "Marco" && password === "123") {
      setUser(username);
      AsyncStorage.setItem('user', username)
      return true;
    }
    return false;
  };

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('user')
    setUser("");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await AsyncStorage.getItem('user')
        console.log(currentUser)
      
      } catch (error) {
        console.log("Error de getUser: "+error)
      }
    }
  }, [])

  const values = {
    user,
    handleLogin,
    handleLogOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;