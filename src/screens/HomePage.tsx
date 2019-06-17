import React, { useContext, useEffect } from "react";

import { Tabs } from "antd";

import Container from "../components/Container/Container";
import CurrencyCard from "../components/CurrencyCard/CurrencyCard";

import homeTabs from "../store/home-tabs";
import { HomeContext } from "../context/HomeContext";
import { FavoritesContext } from "../context/FavoritesContext";

const { TabPane } = Tabs;

const HomePage = () => {
  const { results } = useContext(HomeContext);
  const { dispatchFavorites } = useContext(FavoritesContext);

  const { currencyResults } = results;

  const handleFavorite = (currencyResult: object) => {
    dispatchFavorites({ payload: currencyResult });
  };

  const API = "https://min-api.cryptocompare.com/data/top/";

  const fetchTopCurrencies = () => {
    fetch(
      `${API}totalvolfull?limit=10&tsym=NGN&api_key=${
        process.env.REACT_APP_CRYPTOCOMPARE_API_KEY
      }`
    )
      .then(res => res.json())
      .then(data => console.log(data.Data));
  };

  useEffect(() => {
    return () => {
      fetchTopCurrencies();
    };
  }, []);

  const renderTabPane = (index: number) => {
    switch (index) {
      case 0:
        return currencyResults.map(
          (currencyResult: any, i: string | number | undefined) => (
            <CurrencyCard
              key={i}
              currencyResult={currencyResult}
              handleFavorite={handleFavorite}
            />
          )
        );

      case 1:
        const topGainers = currencyResults.filter(
          (
            result: {
              percentage_change: {
                slice: (arg0: number, arg1: number) => string;
              };
            },
            i: any
          ) => result.percentage_change.slice(0, 1) !== "-"
        );
        return topGainers.map(
          (currencyResult: any, i: string | number | undefined) => (
            <CurrencyCard
              key={i}
              currencyResult={currencyResult}
              handleFavorite={handleFavorite}
            />
          )
        );

      case 2:
        const topLosers = currencyResults.filter(
          (
            result: {
              percentage_change: {
                slice: (arg0: number, arg1: number) => string;
              };
            },
            i: any
          ) => result.percentage_change.slice(0, 1) === "-"
        );
        return topLosers.map(
          (currencyResult: any, i: string | number | undefined) => (
            <CurrencyCard
              key={i}
              currencyResult={currencyResult}
              handleFavorite={handleFavorite}
            />
          )
        );

      default:
        return <h3>Nothing to see here</h3>;
    }
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="0"
        tabPosition="top"
        tabBarStyle={{ display: "flex", width: "100%" }}
      >
        {homeTabs.map((tab: string, index: number) => (
          <TabPane tab={tab} key={`${index}`}>
            <Container padding="0 0.75rem">{renderTabPane(index)}</Container>
            {/* {renderTabPane(index)} */}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default HomePage;
