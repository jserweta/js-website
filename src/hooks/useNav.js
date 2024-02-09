import { useRef, useContext, useEffect } from "react";
import { useOnScreen } from "./useOnScreen";
import { NavContext } from "../context/NavContext";

export const useNav = (navItem) => {
  const ref = useRef(null);

  const { setActiveNavItem } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavItem(navItem);
    }
  }, [isOnScreen, setActiveNavItem, navItem]);

  return ref;
};
