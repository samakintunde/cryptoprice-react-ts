import React from "react";
import { Icon } from "antd";

interface Props {
  active: boolean;
  icon: any;
  handleClick: any;
  title: string;
}

const NavItem: React.FC<Props> = ({
  active,
  icon,
  handleClick,
  title
}: Props) => {
  const { type, theme } = icon;

  return (
    <div
      className={`${active ? "nav__item--active" : "nav__item"}`}
      onClick={handleClick}
    >
      <Icon type={type} theme={theme} style={{ fontSize: "1.25rem" }} />
      <p>{title}</p>
    </div>
  );
};

export default NavItem;
