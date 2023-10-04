import { Children, createContext } from "react";


const person = {
    id: 1,
    name: 'juan', 
    lastName: 'Rivera',
    age: 23,
    city: 'Morelia',
    country: 'Mexico',
    school: 'itm',
    isActive: true,
  }
  

export const AppContext = createContext(person)


const AppContextProvider = () => {
    return(
        <AppContext.Provider >
            {children}
        </AppContext.Provider>

    )
}
export default AppContextProvider

