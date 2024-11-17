import { PropsWithChildren, useState } from "react";
import { RenderCounter } from "../../components/render-counter";
import { Button } from "../../components/button";

const Child = () => {
  return <RenderCounter />;
};

const SetStateChildren: React.FC<PropsWithChildren> = (props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      {props.children}
      <Button onClick={() => setCount(count + 1)}>{`Click count: ${count}`}</Button>
    </>
  );
};

export const SetStateChildrenContainer = () => {
  return (
    <SetStateChildren>
      <Child />
    </SetStateChildren>
  );
};
