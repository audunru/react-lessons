import { useState } from "react";
import { RenderCounter } from "../../components/render-counter";
import { Button } from "../../components/button";

export const SetState: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <RenderCounter />

      <Button onClick={() => setCount(count + 1)}>{`Click count: ${count}`}</Button>
    </>
  );
};
