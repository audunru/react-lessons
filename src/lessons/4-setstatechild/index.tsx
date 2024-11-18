import { useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const Child = () => {
  // This will render again every time parent state changes
  return <RenderCount />;
};

const UseStateWithChild = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Child />

      <Button onClick={handleClick}>{`Click count: ${count.toString(10)}`}</Button>
    </>
  );
};

export default UseStateWithChild;
