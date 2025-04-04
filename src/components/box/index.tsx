import clsx from "clsx";
import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = (props: BoxProps) => {
  const baseClasses = "flex flex-col gap-4 p-4 rounded-lg border shadow-md";
  const themeClasses = "text-gray-900 border-gray-200 dark:text-gray-100 dark:border-gray-700";

  return <div className={clsx(baseClasses, themeClasses, props.className)}>{props.children}</div>;
};

export default Box;
