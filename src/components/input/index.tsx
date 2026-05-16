import clsx from "clsx";
import type React from "react";
import { forwardRef, useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, ...rest }, ref) => {
  const id = useId();

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg text-gray-900 dark:text-gray-100" htmlFor={id}>
        {label}
      </label>
      <input
        className={clsx(
          "rounded-lg border-2 border-gray-400 bg-gray-100 p-2 text-lg text-gray-900 shadow-md placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600 dark:bg-transparent dark:text-gray-100 dark:placeholder:text-gray-500",
          className,
        )}
        id={id}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
