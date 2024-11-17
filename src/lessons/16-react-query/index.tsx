import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

import Code from "../../components/code";
import Loader from "../../components/loader";
import RenderCount from "../../components/render-count";
import SubTitle from "../../components/sub-title";
import { fetchTodo, Todo } from "../6-fetch";

const ReactQuery: React.FC = () => {
  const { data: value, isLoading } = useQuery<Todo>({ queryKey: ["todo", 1], queryFn: fetchTodo });

  return (
    <>
      <RenderCount />
      {isLoading && <Loader />}
      {value && (
        <>
          <SubTitle>API response</SubTitle>
          <Code>{JSON.stringify(value, null, 2)}</Code>
        </>
      )}
    </>
  );
};

const queryClient = new QueryClient();

const ReactQueryLesson: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
    </QueryClientProvider>
  );
};

export default ReactQueryLesson;
