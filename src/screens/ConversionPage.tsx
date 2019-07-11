import React, { useState } from "react";
import { Icon } from "antd";

import ConversionForm from "../containers/ConversionForm/ConversionForm";
import Container from "../components/Container/Container";
import CurrencyConversionCard from "../components/CurrencyCard/CurrencyConversionCard";
import CurrencyCard from "../components/CurrencyCard/CurrencyCard";
import { CURRENCIES_CONVERSION_API } from "../services/api";

const ConversionPage = () => {
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [toAmount, setToAmount] = useState();
  const [fromAmount, setFromAmount] = useState();

  const fetchConversions = (amount: string, from: string, to: string) => {
    setFetching(true);
    fetch(
      `${CURRENCIES_CONVERSION_API}?fsym=${from}&tsyms=${to}&api_key=${
        process.env.REACT_APP_CRYPTOCOMPARE_API_KEY
      }`
    )
      .then(data => data.json())
      .then(res => {
        setResult(res);
        setFetching(false);
        setFromAmount(Number(amount));
        setToAmount(Number(amount) * res[to] + "");
        setFrom(from);
        setTo(to);
      });
  };

  const renderResults = () => {
    if (fetching === false && result) {
      return (
        (
          <section className="conversion__result-wrapper">
            <CurrencyConversionCard
              amount={fromAmount}
              currency="Naira"
              image="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              name="Naira"
            />
            <p className="conversion__equality">=</p>
            <CurrencyConversionCard
              amount={toAmount}
              currency="Bitcoin"
              image="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              name="Bitcoin"
            />
          </section>
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
