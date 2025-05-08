import React, { useState } from "react";

export const NavContext = React.createContext();

const NavProvider = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState("");

  const providerValue = {
    activeNavItem,
    setActiveNavItem,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
