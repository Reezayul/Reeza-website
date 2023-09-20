import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

// const API =[
//   // "http://localhost:3000/service";
// {
//     "id": 1,
//     "image": "lkjafslkdfl",
//     "name": "Web devlopment",
//     "description": "lorem12"
//   }
// ];

const intialState = {
  name: "",
  image: "",
  
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

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

  //  to get the api data
  // const getServices = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     dispatch({ type: "GET_SERVICES", payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // to call the api
  // useEffect(() => {
  //   getServices(API);
  // }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutpage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
