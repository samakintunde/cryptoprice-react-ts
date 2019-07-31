import React, { useContext } from "react";

import Footer from "./containers/Footer/Footer";
import Header from "./components/Header/Header";

import HomePage from "./screens/HomePage";
import ConversionPage from "./screens/ConversionPage";
import FavoritesPage from "./screens/FavoritesPage";

import { FooterContext } from "./context/FooterContext";

import "antd/dist/antd.css";
import "./App.scss";

const App: React.FC = () => {
  const { activeIndex } = useContext(FooterContext);

  const renderScreen = () => {
    switch (activeIndex.activeIndex) {
      case 0:
        return <HomePage />;

      case 1:
        return <ConversionPage />;

      case 2:
        return <FavoritesPage />;

      default:
        return <h3>Built by Samakintunde</h3>;
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
