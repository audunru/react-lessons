import React, { useRef } from "react";

export const RenderCount: React.FC = () => {
  const count = useRef<number>(0);

  count.current++;

  return <p>Render count: {count.current}</p>;
};
