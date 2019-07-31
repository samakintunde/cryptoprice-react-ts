import React, { useState } from "react";
import { Icon } from "antd";

import ConversionForm from "../containers/ConversionForm/ConversionForm";
import Container from "../components/Container/Container";
import ConversionResult from "../components/CurrencyCard/ConversionResult";

import { CURRENCIES_CONVERSION_API } from "../services/api";
import { fiatCurrencies, cryptoCurrencies } from "../store/currencies";

const ConversionPage = () => {
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [toAmount, setToAmount] = useState();
  const [fromAmount, setFromAmount] = useState();

  const fetchConversions = async (amount: string, from: string, to: string) => {
    setFetching(true);
    setFromCurrency(from);
    setToCurrency(to);

    const res = await fetch(
      `${CURRENCIES_CONVERSION_API}?fsym=${from}&tsyms=${to}&api_key=${
        process.env.REACT_APP_CRYPTOCOMPARE_API_KEY
      }`
    );
    const data = await res.json();

    setResult(data);
    setFetching(false);
    setFromAmount(Number(amount));
    setToAmount(Number(amount) * data[to] + "");
  };

  const renderResults = () => {
    if (fetching === false && result) {
      return (
        (
          <ConversionResult
            fromAmount={fromAmount}
            toAmount={toAmount}
            fromName={fiatCurrencies[fromCurrency]}
            toName={fiatCurrencies[toCurrency]}
          />
        ) || ""
      );
    } else if (fetching === true) {
      return (
        <section className="conversion__result-wrapper">
          <Icon type="loading" style={{ fontSize: "2rem", color: "#000" }} />
        </section>
      );
    }
  };

  return (
    <div className="conversion">
      <Container padding="1rem 0.75rem">
        <ConversionForm handleSubmit={fetchConversions} loading={fetching} />
        {renderResults()}
      </Container>
    </div>
  );
};

export default ConversionPage;
