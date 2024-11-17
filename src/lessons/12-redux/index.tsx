import { Provider, useSelector } from "react-redux";
import Explanation from "../../components/render-counter";
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
      <Explanation />
      <Paragraph>Current value: {value}</Paragraph>
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
