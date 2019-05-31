import React from "react";
import { FooterContextProvider } from "./FooterContext";

const Provider: React.FC = ({ children }) => {
  return <FooterContextProvider>{children}</FooterContextProvider>;
};

export default Provider;
