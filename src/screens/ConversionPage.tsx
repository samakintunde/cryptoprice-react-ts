import React from "react";

import ConversionForm from "../containers/ConversionForm/ConversionForm";
import Container from "../components/Container/Container";

const ConversionPage = () => {
  const fetchConversions = (from: string, amount: string, to: string) => {
    // fetch();
    console.log(from);
  };

  return (
    <div>
      <Container padding="1rem 0.75rem">
        <ConversionForm handleSubmit={fetchConversions} />
      </Container>
    </div>
  );
};

export default ConversionPage;
