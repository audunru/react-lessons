import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition-colors"
  >
    {children}
  </a>
);

export default Link;
