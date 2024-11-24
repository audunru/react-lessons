import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = (props: LinkProps) => (
  <a
    href={props.href}
    className="text-blue-600 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-400 dark:focus:ring-blue-300"
  >
    {props.children}
  </a>
);

export default Link;
