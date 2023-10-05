import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export const UseThemeContext = () => {
    const contextValue = useContext(ThemeContext);
    return contextValue;
};