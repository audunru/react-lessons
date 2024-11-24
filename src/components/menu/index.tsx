import clsx from "clsx";
import React, { PropsWithChildren, useRef, useState } from "react";

import Button from "../button";
import useClickOutside from "./useClickOutside";

const Menu = (props: PropsWithChildren) => {
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
      <Button onClick={toggleMenu} aria-expanded={isMenuOpen} className="peer flex items-center space-x-2 lg:hidden">
        <span className="relative flex size-6 flex-col items-center justify-center">
          <span
            className={clsx(
              "absolute block h-[2px] w-6 rounded bg-white transition-transform duration-300 ease-in-out",
              isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2",
            )}
          ></span>
          <span
            className={clsx(
              "absolute block h-[2px] w-6 rounded bg-white transition-opacity duration-300 ease-in-out",
              isMenuOpen ? "opacity-0" : "opacity-100",
            )}
          ></span>
          <span
            className={clsx(
              "absolute block h-[2px] w-6 rounded bg-white transition-transform duration-300 ease-in-out",
              isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2",
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
