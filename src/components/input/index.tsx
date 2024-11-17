import { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, className, ...rest }) => {
  const id = useId();

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-gray-900 dark:text-gray-100 font-bold">
        {label}
      </label>
      <input
        id={id}
        className={`bg-white text-gray-900 border border-gray-400 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 text-sm ${className}`}
        {...rest}
      />
    </div>
  );
};
