import { useEffect, useState } from "react";

import Code from "../../components/code";
import Loader from "../../components/loader";
import RenderCount from "../../components/render-count";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodo = async (): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = (await response.json()) as Todo;

  return data;
};

const Fetch = () => {
  const [value, setValue] = useState<Todo>();

  useEffect(() => {
    const getData = async () => {
      const data = await getTodo();
      setValue(data);
    };

    void getData();
  }, []);

  return (
    <>
      {value ? <Code title="API response">{JSON.stringify(value, null, 2)}</Code> : <Loader />}
      <RenderCount />
    </>
  );
};

export default Fetch;
