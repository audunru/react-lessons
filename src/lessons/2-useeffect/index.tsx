import { useEffect, useState } from "react";
import Explanation from "../../components/render-counter";
import { Paragraph } from "../../components/paragraph";

const UseEffectLesson: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
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
