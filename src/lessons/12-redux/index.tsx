import { Provider, useSelector } from "react-redux";

import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { receivedValue, selectValue, store, useAppDispatch } from "./store";

export const ValueSetter: React.FC = () => {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(receivedValue(new Date().toISOString()))}>Update</Button>;
};

const Redux: React.FC = () => {
  const value = useSelector(selectValue);

  return (
    <>
      <RenderCount />
      <Paragraph>Last updated: {value}</Paragraph>
      <ValueSetter />
    </>
  );
};

const ReduxLesson: React.FC = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};

export default ReduxLesson;
