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

export const fetchTodo = async (): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = (await response.json()) as Todo;

  return data;
};

const FetchLesson: React.FC = () => {
  const [value, setValue] = useState<Todo>();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTodo();
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
