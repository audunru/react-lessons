import { Message } from "../../components/message";
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
      <Message title="Fetching with React Router">
        In React Router, you can use loader functions to load data and prepare it before your component renders.
      </Message>
      <Paragraph>{`Value is now ${JSON.stringify(value)}`}</Paragraph>
    </>
  );
};
