import { useEffect, useState } from "react";
import { Message } from "../../components/message";
import { Paragraph } from "../../components/paragraph";

export const UseEffect: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    setValue(value + 1);
  }, []);

  return (
    <>
      <Message title="Setting state in useEffect causes an extra render">
        If you have a value (i.e. from a prop), and you need to transform it into something else, you can just do it in
        the body of the function.
      </Message>
      <Paragraph>{`Value is now ${value}`}</Paragraph>
    </>
  );
};
