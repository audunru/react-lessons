import { PropsWithChildren, useState } from "react";

import { Button } from "../../components/button";
import Explanation from "../../components/render-counter";

const Child = () => {
  // This will *not* render again when parent state changes
  return <Explanation />;
};

const UseStateWithChildren: React.FC<PropsWithChildren> = (props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      {props.children}
      <Button onClick={() => setCount(count + 1)}>{`Click count: ${count}`}</Button>
    </>
  );
};

const UseStateWithChildrenLesson = () => {
  return (
    <UseStateWithChildren>
      <Child />
    </UseStateWithChildren>
  );
};

export default UseStateWithChildrenLesson;
