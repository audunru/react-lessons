import { RenderCounter } from "../../components/render-counter";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Paragraph } from "../../components/paragraph";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return data;
};

export const ReactRouterLoader: React.FC = () => {
  const value = useLoaderData();

  return (
    <>
      <RenderCounter />

      <Paragraph>{`Value is now ${JSON.stringify(value)}`}</Paragraph>
    </>
  );
};
