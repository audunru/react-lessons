import clsx from "clsx";
import React, { forwardRef, useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, ...rest }, ref) => {
  const id = useId();

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-lg text-gray-900 dark:text-gray-100">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className={clsx(
          "text-lg bg-gray-100 dark:bg-transparent text-gray-900 dark:text-gray-100 border-2 border-gray-400 dark:border-gray-600 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 dark:placeholder-gray-500",
          className,
        )}
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
