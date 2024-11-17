import { PropsWithChildren, useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const Child = () => {
  // This will *not* render again when parent state changes
  return <RenderCount />;
};

const Parent: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      {props.children}
      <Button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >{`Click count: ${count.toString(10)}`}</Button>
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
