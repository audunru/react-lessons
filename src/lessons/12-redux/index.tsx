import { Provider, useSelector } from "react-redux";
import { Message } from "../../components/message";
import { receivedValue, selectValue, store, useAppDispatch } from "./store";
import { Paragraph } from "../../components/paragraph";
import { Button } from "../../components/button";

export const ValueSetter: React.FC = () => {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(receivedValue(new Date().toISOString()))}>Update</Button>;
};

const Redux: React.FC = () => {
  const value = useSelector(selectValue);

  return (
    <>
      <Message title="Updating the redux store triggers a render of components that use the redux store">
        Child components will rerender even though they don't change.
      </Message>
      <Paragraph>Current value: {value}</Paragraph>
      <ValueSetter />
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
