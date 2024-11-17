import React, { useRef } from "react";

export const Counter: React.FC = () => {
  const count = useRef<number>(0);

  count.current++;

  return (
    <p className="text-xl dark:text-gray-100">
      Render count:
      <span className="inline-block w-8 h-8 text-center bg-purple-200 dark:bg-purple-600 dark:text-gray-100 rounded-full ml-3">
        {count.current}
      </span>
    </p>
  );
};
