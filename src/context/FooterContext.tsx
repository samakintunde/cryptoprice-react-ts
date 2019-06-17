import React, { createContext, useReducer } from "react";

import { initialState, footerReducer } from "../reducers/footer/footer-reducer";

const FooterContext = createContext(initialState);

const FooterContextProvider = ({ children }: any) => {
  // Reducer
  const [activeIndex, dispatchActiveIndex] = useReducer(
    footerReducer,
    initialState
  );

  return (
    <FooterContext.Provider value={{ activeIndex, dispatchActiveIndex }}>
      {children}
    </FooterContext.Provider>
  );
};

export { FooterContext, FooterContextProvider };
