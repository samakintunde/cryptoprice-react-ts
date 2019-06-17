import React from "react";
import { FooterContextProvider } from "./FooterContext";
import { FavoritesContextProvider } from "./FavoritesContext";
import { HomeContextProvider } from "./HomeContext";

const Provider: React.FC = ({ children }) => {
  return (
    <HomeContextProvider>
      <FooterContextProvider>
        <FavoritesContextProvider>{children}</FavoritesContextProvider>
      </FooterContextProvider>
    </HomeContextProvider>
  );
};

export default Provider;
