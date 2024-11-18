import { useEffect } from "react";
import { Provider } from "react-redux";

import Alert from "../../components/alert";
import Code from "../../components/code";
import Loader from "../../components/loader";
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
} from "../17-redux-async-thunk/store";

const LoadingIndicator = () => {
  const isLoading = useAppSelector(getIsLoading);

  // isLoading changes from false to true and back to false again, so this component will render three times.

  if (isLoading) {
    return <Loader />;
  }

  return null;
};

const Todo = () => {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector(getIsLoaded);
  const isFailed = useAppSelector(getIsFailed);
  const error = useAppSelector(getError);
  const todo = useAppSelector(getTodoData);

  useEffect(() => {
    if (!isLoaded) {
      void dispatch(fetchTodo());
    }
  }, [dispatch, isLoaded]);

  // This component renders two times. First to dispatch the action and begin loading,
  // then a second time when loading is completed.

  return (
    <>
      {isFailed && <Alert type="error">{error?.message}</Alert>}

      {isLoaded && <Code title="API response">{JSON.stringify(todo, null, 2)}</Code>}
    </>
  );
};

const ReduxAsyncThunkDistributed = () => {
  return (
    <>
      <RenderCount />

      <LoadingIndicator />

      <Todo />
    </>
  );
};

const ReduxAsyncThunkDistributedWrapper = () => {
  return (
    <Provider store={store}>
      <ReduxAsyncThunkDistributed />
    </Provider>
  );
};

export default ReduxAsyncThunkDistributedWrapper;
