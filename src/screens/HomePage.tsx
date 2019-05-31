import React from "react";
import { Tabs, Radio } from "antd";

import homeTabs from "../store/home-tabs";

const { TabPane } = Tabs;

const HomePage = () => {
  const handleModeChange = () => {};

  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value="top"
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">Global</Radio.Button>
        <Radio.Button value="left">Top Gainers</Radio.Button>
        <Radio.Button value="left">Top Losers</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="0"
        tabPosition="top"
        tabBarStyle={{ display: "flex", width: "100%" }}
      >
        {homeTabs.map((tab: string, i: number) => (
          <TabPane tab={tab} key={`${i}`}>
            {tab}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default HomePage;
