import clsx from "clsx";
import { useRef } from "react";

const Counter = () => {
  const count = useRef<number>(0);

  count.current++;

  const bgColors = [
    "bg-red-300",
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-violet-300",
  ];

  const textColors = [
    "text-red-900",
    "text-orange-900",
    "text-yellow-900",
    "text-green-900",
    "text-blue-900",
    "text-indigo-900",
    "text-violet-900",
  ];

  // Cycle through the rainbow colors
  const bgColorClass = bgColors[(count.current - 1) % bgColors.length];
  const textColorClass = textColors[(count.current - 1) % bgColors.length];

  return (
    <p className="text-xl" role="status" aria-live="polite">
      <span className="dark:text-gray-100">Render count:</span>
      <span
        className={clsx(
          "inline-block w-8 h-8 text-center text-gray-800 rounded-full ml-3",
          bgColorClass,
          textColorClass
        )}
      >
        {count.current}
      </span>
    </p>
  );
};

export default Counter;
