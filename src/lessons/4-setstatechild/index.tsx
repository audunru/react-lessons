import { useState } from "react";

import { Button } from "../../components/button";
import Explanation from "../../components/render-counter";

const Child = () => {
  // This will render again every time parent state changes
  return <Explanation />;
};

const UseStateWithChildLesson: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Child />
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >{`Click count: ${count.toString(10)}`}</Button>
    </>
  );
};

export default UseStateWithChildLesson;
