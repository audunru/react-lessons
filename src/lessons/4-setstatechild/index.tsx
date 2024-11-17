import { useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const Child = () => {
  // This will render again every time parent state changes
  return <RenderCount />;
};

const UseStateWithChildLesson: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Child />
      <Button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >{`Click count: ${count.toString(10)}`}</Button>
    </>
  );
};

export default UseStateWithChildLesson;
