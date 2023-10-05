import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const UseAppContext = () => {
  const contextValue = useContext(AppContext); // Utiliza useContext para acceder al contexto
  return contextValue;
};
