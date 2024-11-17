import clsx from "clsx";
import React, { PropsWithChildren, useRef, useState } from "react";

import Button from "../button";
import useClickOutside from "./useClickOutside";

const Menu: React.FC<PropsWithChildren> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useClickOutside(menuRef, closeMenu);

  return (
    <div ref={menuRef} onClick={handleClick}>
      <Button onClick={toggleMenu} aria-expanded={isMenuOpen} className="lg:hidden peer flex items-center space-x-2">
        <span className="relative w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={clsx(
              "block absolute w-6 h-[2px] bg-white rounded transition-transform duration-300 ease-in-out",
              isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2",
            )}
          ></span>
          <span
            className={clsx(
              "block absolute w-6 h-[2px] bg-white rounded transition-opacity duration-300 ease-in-out",
              isMenuOpen ? "opacity-0" : "opacity-100",
            )}
          ></span>
          <span
            className={clsx(
              "block absolute w-6 h-[2px] bg-white rounded transition-transform duration-300 ease-in-out",
              isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2",
            )}
          ></span>
        </span>
        <span>{isMenuOpen ? "Close Menu" : "Open Menu"}</span>
      </Button>

      {props.children}
    </div>
  );
};

export default Menu;
