import { useEffect, useState } from "react";
import Explanation from "../../components/render-counter";
import { Paragraph } from "../../components/paragraph";

const FetchLesson: React.FC = () => {
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
      <Explanation />

      <Paragraph>{`Value is now ${JSON.stringify(value)}`}</Paragraph>
    </>
  );
};

export default FetchLesson;
