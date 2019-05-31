import React, { useContext, useEffect } from "react";

import ConversionPage from "./screens/ConversionPage";
import Footer from "./containers/Footer/Footer";
import Header from "./components/Header/Header";

import { FooterContextProvider, FooterContext } from "./context/FooterContext";

import "antd/dist/antd.css";
import "./App.scss";
import HomePage from "./screens/HomePage";

const App: React.FC = () => {
  const { activeIndex } = useContext(FooterContext);

  const renderScreen = () => {
    switch (activeIndex.activeIndex) {
      case 0:
        return <HomePage />;
        break;

      case 1:
        return <ConversionPage />;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header title="Cryptoprice" />
      <div className="main-wrapper">
        <main>{renderScreen()}</main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
