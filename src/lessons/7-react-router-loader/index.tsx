import { LoaderFunction, useLoaderData } from "react-router-dom";

import { Code } from "../../components/code";
import Explanation from "../../components/render-counter";
import { SubTitle } from "../../components/sub-title";
import { Todo } from "../6-fetch";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await response.json()) as Todo;

  return data;
};

const ReactRouterLoaderLesson: React.FC = () => {
  const value = useLoaderData() as Todo;

  return (
    <>
      <Explanation />
      <SubTitle>API response</SubTitle>
      <Code>{JSON.stringify(value, null, 2)}</Code>
    </>
  );
};

export default ReactRouterLoaderLesson;
