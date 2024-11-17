import { useState } from "react";
import { RenderCounter } from "../../components/render-counter";
import { Button } from "../../components/button";

const Child = () => {
  return <RenderCounter />;
};

export const SetStateChild: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Child />
      <Button onClick={() => setCount(count + 1)}>{`Click count: ${count}`}</Button>
    </>
  );
};
