import React from 'react';
import { useGlobalContext } from '../Context/ThemeContext';

export default function OptionFunctions(){
    let {globalState, setGlobalState} = useGlobalContext();

    function handleDarkMode(){
        newGlobalState = {...globalState};
        newGlobalState.bgColor = globalState.darkMode ? '#0d0d0d' :'#FFF'
        newGlobalState.cardOptionsFontColor = globalState.darkMode ? '#edf893' : '#969e64'
        newGlobalState.cardOptionsColor = globalState.darkMode ? '#1f1f1f' : '#EEE'
        newGlobalState.fontColor = globalState.darkMode ? '#FFF' : '#000'
        newGlobalState.transactionCardBackgroundColor = globalState.darkMode ? '#edf893' : '#b3b3ff'
        newGlobalState.darkMode = !newGlobalState.darkMode;
        setGlobalState(newGlobalState);
    }

    return{
        handleDarkMode,
    }
}
