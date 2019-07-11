import React from "react";
import { Icon } from "antd";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Icon type="loading" />
    </div>
  );
};

export default Spinner;
