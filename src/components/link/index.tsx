import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = (props: LinkProps) => (
  <a
    href={props.href}
    className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition-colors"
  >
    {props.children}
  </a>
);

export default Link;
