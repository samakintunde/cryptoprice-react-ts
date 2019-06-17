import React, { useState } from "react";
import { Row, Col, Form, InputNumber, Button, Select } from "antd";

import { fiatCurrencies, cryptoCurrencies } from "../../store/currencies";

const { Option } = Select;
const { Item } = Form;

interface Props {
  handleSubmit: any;
  loading: any;
}

const ConversionForm = ({ handleSubmit, loading }: Props) => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("BTC");

  const handleConversionFormSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit(amount, fromCurrency, toCurrency);
  };

  return (
    <Form onSubmit={handleConversionFormSubmit} className="conversion-form">
      <Item>
        <Row type="flex" justify="space-between">
          <Col span={6}>
            <Select
              defaultValue="NGN"
              style={{ width: "100%" }}
              onChange={val => setFromCurrency(val)}
            >
              {fiatCurrencies.map((currency, index) => (
                <Option key={index} value={currency}>
                  {currency}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={17}>
            <InputNumber
              placeholder="Enter amount here"
              onChange={val => setAmount(val + "")}
              style={{ width: "100%" }}
              // autoFocus
              minLength={1}
              maxLength={16}
              required
            />
          </Col>
        </Row>
      </Item>
      <Item>
        <Select
          defaultValue="Choose cryptocurrency"
          onChange={val => setToCurrency(val)}
        >
          {cryptoCurrencies.map((currency, index) => (
            <Option key={index} value={currency.short}>{`${currency.short} - ${
              currency.full
            }`}</Option>
          ))}
        </Select>
      </Item>
      <Item>
        <Row type="flex" justify="center">
          <Button
            className="conversion-submit-btn"
            type="primary"
            style={{ backgroundColor: "#000000" }}
            loading={loading}
            htmlType={loading ? "button" : "submit"}
            block
          >
            {loading ? "Converting" : "Convert"}
          </Button>
        </Row>
      </Item>
    </Form>
  );
};

export default ConversionForm;
