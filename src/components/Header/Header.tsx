import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }: Props) => (
  <header className="header">
    <h1>{title}</h1>
  </header>
);

export default Header;
