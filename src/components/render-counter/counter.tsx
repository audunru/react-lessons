import React, { useRef } from "react";

export const Counter: React.FC = () => {
  const count = useRef<number>(0);

  count.current++;

  return <p className="text-xl font-bold dark:text-gray-100">Render count: {count.current}</p>;
};
