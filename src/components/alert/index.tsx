import clsx from "clsx";
import React from "react";

interface AlertProps {
  children: React.ReactNode; // Contents of the alert
  type?: "success" | "error" | "warning" | "info"; // Alert type
}

const Alert: React.FC<AlertProps> = ({ children, type = "info" }) => {
  const classes = clsx("p-4 rounded-md border shadow-md flex items-center gap-2 text-lg", {
    // Light and dark mode classes for each type
    "bg-green-100 text-green-800 border-green-300 dark:bg-green-800 dark:text-green-200 dark:border-green-600":
      type === "success",
    "bg-red-100 text-red-800 border-red-300 dark:bg-red-800 dark:text-red-200 dark:border-red-600": type === "error",
    "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-800 dark:text-yellow-200 dark:border-yellow-600":
      type === "warning",
    "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-800 dark:text-blue-200 dark:border-blue-600":
      type === "info",
  });

  return <div className={classes}>{children}</div>;
};

export default Alert;
