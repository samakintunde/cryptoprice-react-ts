import React from "react";
import { Icon } from "antd";

interface Props {
  image: string;
  last_updated: string;
  name: string;
  price: string;
  percentage_change: string;
  symbol: string;
}

const CurrencyCard = ({
  image,
  last_updated,
  name,
  price,
  percentage_change,
  symbol
}: Props) => {
  const round = (num: string, dp: number) => {
    return parseFloat(num).toFixed(dp);
  };

  const change = percentage_change.slice(0, 1) !== "-";

  return (
    <article className="currency-card">
      <div className="currency-card__content">
        <div className="currency-card__image-wrapper">
          <img src={image} alt={name} />
        </div>
        <div>
          <p className="currency-card__caption">{symbol}</p>
          <p className="currency-card__title">{name}</p>
        </div>
      </div>
      <div className="currency-card__numbers">
        <div className="currency-card__price">NGN {round(price, 2)}</div>
        <span>
          {change ? (
            <Icon type="caret-up" theme="filled" style={{ color: "#008833" }} />
          ) : (
            <Icon
              type="caret-down"
              theme="filled"
              style={{ color: "#cc0000" }}
            />
          )}{" "}
          {round(percentage_change, 2)}%
        </span>
      </div>
    </article>
  );
};

export default CurrencyCard;
