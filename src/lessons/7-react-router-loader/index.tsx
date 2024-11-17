import Message from "../../components/message";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return data;
};

const ReactRouterLoader: React.FC = () => {
  const value = useLoaderData();

  return (
    <>
      <p>{`Value is now ${JSON.stringify(value)}`}</p>
      <Message title="Fetching with React Router">
        In React Router, you can use loader functions to load data and prepare it before your component renders.
      </Message>
    </>
  );
};

export default ReactRouterLoader;
