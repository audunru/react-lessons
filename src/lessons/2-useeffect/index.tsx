import { useEffect, useState } from "react";

import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";

const UseEffect = () => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setCount((c) => c + 1);
  }, []);

  // The useEffect is not necessary, could have done this instead:
  // const countPlusOne = count + 1;

  return (
    <>
      <Paragraph>{`Value is now ${count.toString(10)}`}</Paragraph>

      <RenderCount />
    </>
  );
};

export default UseEffect;
