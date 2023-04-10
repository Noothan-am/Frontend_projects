import React, { useState, useContext, createContext } from 'react';
const Appcontext = createContext();
export const AppProvider = ({ children }) => {
     const [sideBar, setsideBar] = useState(false);
     const [menu, setMenu] = useState(false);
     const setSideBar = (value) => {
          setsideBar(value);
     }
     const setSubMenu = (value) => {
          setMenu(value);
     }
     return (
          <Appcontext.Provider value={{ menu, sideBar, setSubMenu, setSideBar }}>
               {children}
          </Appcontext.Provider>
     )
}
export const GlobalContext = () => {
     return useContext(Appcontext);
}
