import { useEffect, useState } from "react";
import Explanation from "../../components/render-counter";
import { Paragraph } from "../../components/paragraph";

const UseEffectLesson: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    // Could instead do `Value is now ${value + 1}` or const valuePlusOne = value + 1
    // in the function body, there is no need to use state here.
    setValue(value + 1);
  }, []);

  return (
    <>
      <Explanation />

      <Paragraph>{`Value is now ${value}`}</Paragraph>
    </>
  );
};
export default UseEffectLesson;
