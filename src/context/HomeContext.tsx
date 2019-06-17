import React, { createContext, useReducer } from "react";

import { initialState, homeReducer } from "../reducers/home/home-reducer";

const HomeContext = createContext(initialState);

const HomeContextProvider = ({ children }: any) => {
  // Reducer
  const [results, dispatchResults] = useReducer(homeReducer, initialState);

  return (
    <HomeContext.Provider value={{ results, dispatchResults }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeContextProvider };
