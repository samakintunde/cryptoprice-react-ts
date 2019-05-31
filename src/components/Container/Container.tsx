import React from "react";

interface Props {
  children: any;
  margin?: string;
  padding?: string;
}

const Container = ({ children, margin, padding }: Props) => {
  return <div style={{ padding, margin }}>{children}</div>;
};

export default Container;
