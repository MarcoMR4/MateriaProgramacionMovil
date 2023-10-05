import {createContext, useState } from "react";


const personObj = {
    id: 1,
    name: 'juan', 
    lastName: 'Rivera',
    age: 23,
    city: 'Morelia',
    country: 'Mexico',
    school: 'itm',
    isActive: true,
}

const isDark = false

const themes = {
    light: {
        flatListContainer: 'green'
    },
    dark: {
        flatListContainer: 'white'
    },
}
  

export const AppContext = createContext()


const AppContextProvider = ({children}) => {

    const [person, setPerson] = useState(personObj)

    const theme = isDark ? themes.dark: themes.light

    const handleIsActive = () => {
        setPerson ({
            ...person,
            isActive: !person.isActive
        })
    }

    const values = {
        person, 
        handleIsActive
    }


    return(
        <AppContext.Provider value={values} >
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider

