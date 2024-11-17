import { useEffect, useState } from "react";
import { RenderCounter } from "../../components/render-counter";
import { Paragraph } from "../../components/paragraph";

export const Fetch: React.FC = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();

      setValue(data);
    };
    getData();
  }, []);

  return (
    <>
      <RenderCounter />

      <Paragraph>{`Value is now ${JSON.stringify(value)}`}</Paragraph>
    </>
  );
};
