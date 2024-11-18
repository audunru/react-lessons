import { PropsWithChildren, useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const Child = () => {
  // This will *not* render again when parent state changes
  return <RenderCount />;
};

const Parent = (props: PropsWithChildren) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Button onClick={handleClick}>{`Click count: ${count.toString(10)}`}</Button>
      {props.children}
    </>
  );
};

const UseStateWithChildren = () => {
  return (
    <Parent>
      <Child />
    </Parent>
  );
};

export default UseStateWithChildren;
