import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
const intialState = {
      name: "",
      image: "",
    };

const AppProvider = ({ children }) => {
    
    const updateHomePage = () => {
      return dispatch({
        type: "HOME_UPDATE",
        payload: {
          name: "Reezayul Hussain",
          image: "./images/hero.svg",
        },
      });
    };
    const updateAboutpage = () => {
      return dispatch({
        type: "ABOUT_UPDATE",
        payload: {
          name: "Reezayul Hussain",
          image: "./images/about1.svg",
        },
      });
    };
    const [state, dispatch] = useReducer(reducer, intialState);
    return <AppContext.Provider value={{...state,updateAboutpage,updateHomePage}}>{children}</AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);
};
 export { AppProvider,useGlobalContext};