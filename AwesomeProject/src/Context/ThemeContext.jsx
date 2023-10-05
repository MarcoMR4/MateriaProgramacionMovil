import {createContext, useState } from "react";
// import {useColorScheme} from 'react-native';

const themeOrigin = {
    light: {
        flatListContainer: 'white'
    },
    dark: {
        flatListContainer: '#1f1f1f'
    },
}

const isDarkMode = true


export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    //const colorScheme = useColorScheme();
    //const isDarkMode = colorScheme === 'dark';
    const [darkMode, setDarkMode] = useState(isDarkMode);
    const [themes, setThemes] = useState(themeOrigin)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    
    const values = {
        darkMode,
        themes,
        toggleDarkMode, // Un ejemplo de función para cambiar el tema.
    };

    return(
        <ThemeContext.Provider value={values} >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider