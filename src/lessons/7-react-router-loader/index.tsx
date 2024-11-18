import { LoaderFunction, useLoaderData, useNavigation } from "react-router-dom";

import Code from "../../components/code";
import Loader from "../../components/loader";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { getTodo, Todo } from "../6-fetch";

export const loader: LoaderFunction = async () => {
  return getTodo();
};

const ReactRouterLoader = () => {
  const value = useLoaderData() as Todo;
  const navigation = useNavigation();

  return (
    <>
      <Paragraph>
        The first time you navigate to this page, data is loaded before the render starts. This means only one render is
        required.
      </Paragraph>
      <Paragraph>
        If you click on this lesson in the menu again, <em>two</em> additional renders will happen. During the first
        render, fresh data is fetched from the API and React Router is in its loading state. When the data is ready, a
        second render is performed even if the data has not changed.
      </Paragraph>
      {navigation.state === "loading" && <Loader />}
      <Code title="API response">{JSON.stringify(value, null, 2)}</Code>
      <RenderCount />
    </>
  );
};

export default ReactRouterLoader;
