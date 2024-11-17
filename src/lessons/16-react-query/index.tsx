import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

import Code from "../../components/code";
import Loader from "../../components/loader";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { getTodo, Todo } from "../6-fetch";

const ReactQuery: React.FC = () => {
  const { data: value, isLoading } = useQuery<Todo>({
    queryKey: ["todo", 1],
    queryFn: getTodo,
    staleTime: 1000 * 10,
  });

  return (
    <>
      <RenderCount />

      <Paragraph>
        The first time this component is rendered, data has to be fetched and will cause a rerender.
      </Paragraph>
      <Paragraph>
        If you navigate away and come back within 10 seconds, data will not be fetched (because of the{" "}
        <code>staleTime</code> option), and the component will only be rendered once.
      </Paragraph>
      <Paragraph>
        If you navigate away and come back <em>after</em> 10 seconds, data will be fetched again, but if it has not
        changed the component will still only be rendered once.
      </Paragraph>

      {isLoading && <Loader />}

      {value && <Code title="API response">{JSON.stringify(value, null, 2)}</Code>}
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
