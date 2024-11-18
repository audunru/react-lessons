import { Provider, useSelector } from "react-redux";

import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { receivedValue, selectValue, store, useAppDispatch } from "./store";

export const ValueSetter = () => {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(receivedValue(new Date().toISOString()))}>Update</Button>;
};

const Redux = () => {
  const value = useSelector(selectValue);

  return (
    <>
      <Paragraph>Last updated: {value}</Paragraph>
      <ValueSetter />
      <RenderCount />
    </>
  );
};

const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};

export default ReduxWrapper;
