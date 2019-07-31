import { Icon } from "antd";
import React from "react";

import { roundNumber } from "../../util/_amount";

interface Currency {
  id: number;
  isFavorite: boolean;
  image: string;
  last_updated: string;
  name: string;
  price: string;
  percentage_change: string;
  symbol: string;
}

interface Props {
  currencyResult: Currency;
  handleFavorite?: any;
}

const CurrencyCard = ({ currencyResult, handleFavorite }: Props) => {
  const {
    isFavorite,
    image,
    name,
    price,
    percentage_change,
    symbol
  } = currencyResult;

  const change = percentage_change.slice(0, 1) !== "-";

  return (
    <article className="currency-card">
      <div className="currency-card__wrapper">
        <div className="currency-card__content">
          <div className="currency-card__image-wrapper">
            <img src={image} alt={name} />
          </div>
          <div>
            <p className="currency-card__caption caption">{symbol}</p>
            <p className="currency-card__title text">{name}</p>
          </div>
        </div>
        <div className="currency-card__numbers">
          <div className="currency-card__price">{price}</div>
          <span>
            {change ? (
              <Icon
                type="caret-up"
                theme="filled"
                style={{ color: "#008833" }}
              />
            ) : (
              <Icon
                type="caret-down"
                theme="filled"
                style={{ color: "#cc0000" }}
              />
            )}{" "}
            {roundNumber(percentage_change, 2)}%
          </span>
        </div>
      </div>
        <Icon
          type="heart"
          theme={isFavorite ? "filled" : "outlined"}
          style={{ color: "#ff0000", fontSize: "1.25rem" }}
          onClick={() => {
            handleFavorite(currencyResult);
          }}
        />
    </article>
  );
};

export default CurrencyCard;
