import { Provider, useSelector } from "react-redux";

import { Paragraph } from "../../components/paragraph";
import Explanation from "../../components/render-counter";
import { ValueSetter } from "../12-redux";
import { selectValue, store } from "../12-redux/store";

const ValueDisplay: React.FC = () => {
  const value = useSelector(selectValue);
  return <Paragraph>Last updated: {value}</Paragraph>;
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
