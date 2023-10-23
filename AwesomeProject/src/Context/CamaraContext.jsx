import { useContext, createContext, useState } from "react";

const CameraContext = createContext()

export const CameraContextProvider = ({children}) => {

    const [imageUri, setImageUri] = useState('')

    return (
        
        <CameraContext.Provider value={{imageUri, setImageUri}}>


            {children}


        </CameraContext.Provider>

    )

}

export const useCameraContext = () => {
    return useContext(CameraContext)
}