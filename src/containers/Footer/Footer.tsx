import React, { useContext } from "react";

import { FooterContext } from "./../../context/FooterContext";
import footerMenu from "./../../store/footer-items";

import NavItem from "./../../components/NavItem/NavItem";

const Footer: React.FC = () => {
  const { activeIndex, dispatchActiveIndex } = useContext(FooterContext);

  return (
    <footer className="footer">
      {footerMenu.map((menu: any, index: number) => (
        <NavItem
          key={index}
          active={activeIndex.activeIndex === index}
          icon={menu.icon}
          handleClick={(e: any) =>
            dispatchActiveIndex({
              type: "CHANGE_ACTIVE_TAB",
              index
            })
          }
          title={menu.title}
        />
      ))}
    </footer>
  );
};

export default Footer;
