import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  // Global state
  let [globalState, setGlobalState] = useState({
    // Personalization state
    darkMode: false,
    bgColor:'#0d0d0d',
    cardOptionsColor: '#1f1f1f',
    cardOptionsFontColor: '#edf893',
    buttonContainerBackgroundColor: '#1f1f1f',
    transactionCardBackgroundColor: '#edf893',
    fontColor : '#FFFFFF', 
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};