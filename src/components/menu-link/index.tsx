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
        isActive
          ? "block py-2 text-blue-500 dark:text-blue-700 font-bold"
          : "block py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-800"
      }
    >
      {props.children}
    </NavLink>
  );
};

export default MenuLink;
