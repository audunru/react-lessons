import { useEffect, useState } from "react";

import Code from "../../components/code";
import Loader from "../../components/loader";
import RenderCount from "../../components/render-count";
import SubTitle from "../../components/sub-title";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const FetchLesson: React.FC = () => {
  const [value, setValue] = useState<Todo>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = (await response.json()) as Todo;

      setValue(data);
    };

    void getData();
  }, []);

  return (
    <>
      <RenderCount />
      {value ? (
        <>
          <SubTitle>API response</SubTitle>
          <Code>{JSON.stringify(value, null, 2)}</Code>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default FetchLesson;
