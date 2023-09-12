import React, { useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{ name1: "Reezayul", name2:"Hussain"}}>
        {children}
    </AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);
};
 export { AppProvider,useGlobalContext};