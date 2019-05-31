import React from "react";
import { Tabs } from "antd";

import Container from "../components/Container/Container";
import CurrencyCard from "../components/CurrencyCard/CurrencyCard";

import homeTabs from "../store/home-tabs";
import currencyResults from "../store/currency-results";

const { TabPane } = Tabs;

const HomePage = () => {
  const renderTabPane = (index: number) => {
    switch (index) {
      case 0:
        return currencyResults.map((result, i) => (
          <CurrencyCard key={i} {...result} />
        ));

      case 1:
        const topGainers = currencyResults.filter(
          (result, i) => result.percentage_change.slice(0, 1) !== "-"
        );
        return topGainers.map((result, i) => (
          <CurrencyCard key={i} {...result} />
        ));

      case 2:
        const topLosers = currencyResults.filter(
          (result, i) => result.percentage_change.slice(0, 1) === "-"
        );
        return topLosers.map((result, i) => (
          <CurrencyCard key={i} {...result} />
        ));

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
