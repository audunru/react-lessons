import { Provider, useSelector } from "react-redux";
import Explanation from "../../components/render-counter";
import { selectValue, store } from "../12-redux/store";
import { ValueSetter } from "../12-redux";
import { Paragraph } from "../../components/paragraph";

const ValueDisplay: React.FC = () => {
  const value = useSelector(selectValue);
  return <Paragraph>Current value: {value}</Paragraph>;
};

const ReduxDistributed: React.FC = () => {
  return (
    <>
      <Explanation />
      <ValueDisplay />
      <ValueSetter />
    </>
  );
};

const ReduxDistributedLesson: React.FC = () => {
  return (
    <Provider store={store}>
      <ReduxDistributed />
    </Provider>
  );
};

export default ReduxDistributedLesson;
