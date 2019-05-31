import React from "react";
import ConversionForm from "../containers/ConversionForm/ConversionForm";

const ConversionPage = () => {
  const fetchConversions = (from: string, amount: string, to: string) => {
    // fetch();
    console.log(from);
  };

  return (
    <div>
      <ConversionForm handleSubmit={fetchConversions} />
    </div>
  );
};

export default ConversionPage;
