import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import sanityClient from "../../Client";
import NavItem from "./NavItem";
import { ReactComponent as HomeIcon } from "../../img/home.svg";
import { ReactComponent as AboutMeIcon } from "../../img/about-me.svg";
import { ReactComponent as ResumeIcon } from "../../img/resume.svg";
import { ReactComponent as ContactIcon } from "../../img/contact.svg";
import "./navbar.scss";

const NavBar = () => {
  const navIcon = [HomeIcon, AboutMeIcon, ResumeIcon, ContactIcon];
  const [navItems, setNavItems] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const openMenu = () => setIsOpen(true);

  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 992 });

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "navBar"]{
          navItemName,
          navItemLink,
          navItemIcon{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => {
        setNavItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <header
      className={`navBar ${isOpen ? "showMobile" : ""} `}
      onMouseEnter={isTablet ? toggleMenu : null}
      onMouseLeave={isTablet ? toggleMenu : null}
      onMouseOver={isTablet ? openMenu : null}
    >
      <div
        className={`mobileButton ${isOpen ? "cross" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="navBar__wrapper">
        <nav className="navBar__content">
          <img
            className="navBar__logo"
            src={process.env.PUBLIC_URL + "logo-JS.png"}
            alt="Site logo"
          />

          {navItems &&
            navItems.map((navItem, index) => (
              <NavItem
                itemObj={navItem}
                ItemIcon={navIcon[index]}
                menuItemClick={toggleMenu}
                key={index}
              />
            ))}
        </nav>
        <div className="overflow"></div>
      </div>
    </header>
  );
};

export default NavBar;
