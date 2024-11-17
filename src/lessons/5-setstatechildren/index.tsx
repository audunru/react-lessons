import { PropsWithChildren, useState } from "react";
import Explanation from "../../components/render-counter";
import { Button } from "../../components/button";

const Child = () => {
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
