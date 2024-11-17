import { useEffect, useState } from "react";

import { Paragraph } from "../../components/paragraph";
import Explanation from "../../components/render-counter";

const UseEffectLesson: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    // Could instead do `Value is now ${value + 1}` or const valuePlusOne = value + 1
    // in the function body, there is no need to use state here.
    setValue((v) => v + 1);
  }, []);

  return (
    <>
      <Explanation />

      <Paragraph>{`Value is now ${value.toString(10)}`}</Paragraph>
    </>
  );
};

export default UseEffectLesson;
