import React, { useRef } from "react";

const RenderCount: React.FC = () => {
  const count = useRef<number>(0);

  count.current++;

  return <p>Render count: {count.current}</p>;
};

export default RenderCount;
