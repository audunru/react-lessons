import { useEffect, useState } from "react";
import { Message } from "../../components/message";
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
      <Message title="Fetching data in a useEffect causes an extra render">
        During the first render, the data is undefined, and updating state will trigger a new render.
      </Message>
      <Paragraph>{`Value is now ${JSON.stringify(value)}`}</Paragraph>
    </>
  );
};
