import React, { PropsWithChildren, useRef, useState } from "react";

import { Button } from "../button";
import useClickOutside from "./useClickOutside";

export const Menu: React.FC<PropsWithChildren> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the menu on any click inside the div
    }
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent toggle from immediately closing
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useClickOutside(menuRef, closeMenu);

  return (
    <div ref={menuRef} onClick={handleClick}>
      <Button onClick={toggleMenu} aria-expanded={isMenuOpen} className={"lg:hidden peer"}>
        {isMenuOpen ? "Close Menu" : "Open Menu"}
      </Button>
      {props.children}
    </div>
  );
};
