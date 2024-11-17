import { useState } from "react";

import { Button } from "../../components/button";
import Explanation from "../../components/render-counter";

const UseStateLesson: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Explanation />

      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >{`Click count: ${count.toString(10)}`}</Button>
    </>
  );
};

export default UseStateLesson;
