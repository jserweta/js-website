import React, { useState, useEffect } from "react";
import "./navbar.scss";
import sanityClient from "../../Client";
import NavItem from "./NavItem";
import { ReactComponent as HomeIcon } from "../../img/home.svg";
import { ReactComponent as AboutMeIcon } from "../../img/about-me.svg";
import { ReactComponent as ResumeIcon } from "../../img/resume.svg";
import { ReactComponent as ContactIcon } from "../../img/contact.svg";

const NavBar = () => {
  const navIcon = [HomeIcon, AboutMeIcon, ResumeIcon, ContactIcon];
  const [navItems, setNavItems] = useState(null);

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
    <header className="navBar">
      <nav className="navBar__content">
        <img
          className="navBar__logo"
          src={process.env.PUBLIC_URL + "logo-JS.png"}
          alt="Site logo"
        />

        {navItems &&
          navItems.map((navItem, index) => (
            <NavItem itemObj={navItem} ItemIcon={navIcon[index]} key={index} />
          ))}
      </nav>
      <div className="overflow"></div>
    </header>
  );
};

export default NavBar;
