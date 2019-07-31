import React, { useState } from "react";
import { Row, Col, Form, InputNumber, Button, Select, Icon } from "antd";

import { fiatCurrencies, cryptoCurrencies } from "../../store/currencies";

const { Option } = Select;
const { Item } = Form;

interface Props {
  handleSubmit: Function;
  loading: boolean;
}

const ConversionForm = ({ handleSubmit, loading }: Props) => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("BTC");

  const handleConversionFormSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit(amount, fromCurrency, toCurrency);
  };

  const renderOptions = (currencies: object) => {
    return Object.entries(currencies).map(([shortName, fullName]) => (
      <Option key={shortName} value={shortName}>
        {fullName} ({shortName})
      </Option>
    ));
  };

  return (
    <Form onSubmit={handleConversionFormSubmit} className="conversion-form">
      <Item>
        <Col span={24}>
          <InputNumber
            placeholder="Enter amount here"
            onChange={val => setAmount(val + "")}
            // autoFocus
            minLength={1}
            maxLength={16}
            required
          />
        </Col>
      </Item>
      <Item>
        <Row type="flex" justify="space-between" gutter={16}>
          <Col span={11}>
            <Select
              defaultValue="NGN"
              style={{ width: "100%" }}
              onChange={(val: string) => setFromCurrency(val)}
            >
              {renderOptions(fiatCurrencies)}
            </Select>
          </Col>
          <Col span={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Icon type="swap" />
          </Col>
          <Col span={11}>
            <Select
              defaultValue="Bitcoin (BTC)"
              onChange={(val: string) => setToCurrency(val)}
            >
              {renderOptions(cryptoCurrencies)}
            </Select>
          </Col>
        </Row>
      </Item>
      <Item>
        <Row type="flex" justify="center">
          <Button
            className="conversion-submit-btn"
            type="primary"
            // style={{ backgroundColor: "#000000" }}
            loading={loading}
            htmlType={loading ? "button" : "submit"}
            block
          >
            Convert
          </Button>
        </Row>
      </Item>
    </Form>
  );
};

export default ConversionForm;
