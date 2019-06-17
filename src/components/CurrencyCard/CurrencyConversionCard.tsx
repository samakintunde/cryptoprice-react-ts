import * as React from "react";
import { string } from "prop-types";

interface Props {
  amount: string;
  currency: string;
  image: string;
  name: string;
}

const CurrencyConversionCard = (props: any) => {
  const { amount, currency, image, name }: Props = props;

  return (
    <div className="currency-conversion-card">
      {/* <div className="currency-conversion-card__image">
        <img src={image} alt={name} />
      </div> */}
      <p className="currency-conversion-card__amount">{amount}</p>
      <p className="currency-conversion-card__currency">
        {currency}
        {Number(amount) > 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default CurrencyConversionCard;
