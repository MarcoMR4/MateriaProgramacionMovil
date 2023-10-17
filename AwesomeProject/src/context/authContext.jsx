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
      await AsyncStorage.setItem('user', user);
      return true;
    }
    return false;
  };

  const handleLogOut = async () => {
    setUser("");
    await AsyncStorage.removeItem('user')
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await AsyncStorage.getItem("user");
        if (currentUser) {
          setUser(currentUser);
        }
        console.log(currentUser);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const values = {
    user,
    handleLogin,
    handleLogOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;