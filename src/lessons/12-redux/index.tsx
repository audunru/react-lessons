import { Provider, useSelector } from "react-redux";
import { Message } from "../../components/message";
import { receivedValue, selectValue, store, useAppDispatch } from "./store";

export const ValueSetter: React.FC = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(receivedValue(new Date().toISOString()))}>Update</button>;
};

const Redux: React.FC = () => {
  const value = useSelector(selectValue);

  return (
    <>
      <p>Current value: {value}</p>
      <ValueSetter />
      <Message title="Updating the redux store triggers a render of components that use the redux store">
        Child components will rerender even though they don't change.
      </Message>
    </>
  );
};

export const ReduxContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};
