import { useEffect, useState } from "react";
import { RenderCounter } from "../../components/render-counter";
import { Paragraph } from "../../components/paragraph";

export const UseEffect: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    setValue(value + 1);
  }, []);

  return (
    <>
      <RenderCounter />

      <Paragraph>{`Value is now ${value}`}</Paragraph>
    </>
  );
};
