import React, { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import "./navbar.scss";

const NavItem = ({ itemObj, ItemIcon }) => {
  const { activeNavItem, setActiveNavItem } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavItem(itemObj.navItemName);
    document.querySelector(itemObj.navItemLink).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`navBar__item ${
        itemObj.navItemName === activeNavItem ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <ItemIcon />
      <p>{itemObj.navItemName}</p>
    </div>
  );
};

export default NavItem;
