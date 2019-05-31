import React, { createContext, useReducer } from "react";

import { initialState, homeReducer } from "../reducers/Home/home-reducer";

const HomeContext = createContext(initialState);

const HomeContextProvider = ({ children }: any) => {
  // Reducer
  const [state, dispatch] = useReducer(homeReducer, initialState);

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};

export default { HomeContext, HomeContextProvider };
