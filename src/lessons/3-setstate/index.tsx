import { useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const UseState: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <RenderCount />

      <Button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >{`Click count: ${count.toString(10)}`}</Button>
    </>
  );
};

export default UseState;
