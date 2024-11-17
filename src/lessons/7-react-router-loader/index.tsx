import Explanation from "../../components/render-counter";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Paragraph } from "../../components/paragraph";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return data;
};

const ReactRouterLoaderLesson: React.FC = () => {
  const value = useLoaderData();

  return (
    <>
      <Explanation />

      <Paragraph>{`Value is now ${JSON.stringify(value)}`}</Paragraph>
    </>
  );
};

export default ReactRouterLoaderLesson;
