import { useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const UseState = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <RenderCount />

      <Button onClick={handleClick}>{`Click count: ${count.toString(10)}`}</Button>
    </>
  );
};

export default UseState;
