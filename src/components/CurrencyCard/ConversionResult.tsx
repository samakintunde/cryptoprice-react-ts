import * as React from "react";
import { formatAmount, roundNumber } from "../../util/_amount";

interface Props {
  fromAmount: string;
  fromCurrency?: string;
  fromImage?: string;
  fromName: string;
  toAmount: string;
  toCurrency?: string;
  toImage?: string;
  toName: string;
}

const ConversionResult = (props: Props) => {
  const { fromAmount, fromName, toAmount, toName } = props;


  return (
    <section className="conversion__result-wrapper">
      <div className="conversion__result">
        <p className="display conversion__result-amount">
          {formatAmount(roundNumber(fromAmount, 2))}
        </p>
        <p className="conversion__result-currency">{fromName}</p>
      </div>
      <div className="conversion__result" />
      <span className="conversion__equality">
        <p>equals</p>
      </span>
      <div className="conversion__result">
        <p className="display conversion__result-amount">{formatAmount(roundNumber(toAmount, 2))}</p>
        <p className="conversion__result-currency">{toName}</p>
      </div>
    </section>
  );
};

export default ConversionResult;
