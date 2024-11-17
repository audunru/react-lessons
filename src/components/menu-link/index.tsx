import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface MenuLinkProps {
  path: string;
  children: string;
}

const MenuLink: React.FC<MenuLinkProps> = (props: MenuLinkProps) => {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) =>
        clsx(
          "block text-lg py-2",
          isActive
            ? "text-blue-500 dark:text-blue-700 font-bold"
            : "text-gray-600 hover:text-blue-700 dark:text-gray-100 dark:hover:text-blue-600",
        )
      }
    >
      {props.children}
    </NavLink>
  );
};

export default MenuLink;
