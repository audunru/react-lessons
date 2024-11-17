import clsx from "clsx";
import React from "react";

interface BoxProps {
  children: React.ReactNode; // Contents of the box
  className?: string; // Additional custom classes
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  const baseClasses = "flex flex-col gap-4 p-4 rounded-lg border shadow-md";

  // Tailwind classes for light and dark mode
  const themeClasses =
    "bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700";

  return <div className={clsx(baseClasses, themeClasses, className)}>{children}</div>;
};

export default Box;
