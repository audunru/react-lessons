import { useEffect } from "react";
import { Provider } from "react-redux";

import Alert from "../../components/alert";
import Code from "../../components/code";
import Loader from "../../components/loader";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import {
  fetchTodo,
  getError,
  getIsFailed,
  getIsLoaded,
  getIsLoading,
  getTodoData,
  store,
  useAppDispatch,
  useAppSelector,
} from "./store";

const ReduxAsyncThunk = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);
  const isLoaded = useAppSelector(getIsLoaded);
  const isFailed = useAppSelector(getIsFailed);
  const error = useAppSelector(getError);
  const todo = useAppSelector(getTodoData);

  useEffect(() => {
    if (!isLoaded) {
      void dispatch(fetchTodo());
    }
  }, [dispatch, isLoaded]);

  return (
    <>
      <Paragraph>
        During the first render, the <code>fetchTodo</code> action is dispatched. It&apos;s async, and several things
        will happen before the promise is resolved. First, the status is set to <strong>loading</strong>, which triggers
        a second render. A third render is performed when the data has been received.
      </Paragraph>
      {isLoading && <Loader />}
      {isFailed && <Alert type="error">{error?.message}</Alert>}
      {isLoaded && <Code title="API response">{JSON.stringify(todo, null, 2)}</Code>}
      <RenderCount />
    </>
  );
};

const ReduxAsyncThunkWrapper = () => {
  return (
    <Provider store={store}>
      <ReduxAsyncThunk />
    </Provider>
  );
};

export default ReduxAsyncThunkWrapper;
