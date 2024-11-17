import { Provider, useSelector } from "react-redux";

import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { ValueSetter } from "../12-redux";
import { selectValue, store } from "../12-redux/store";

const ValueDisplay: React.FC = () => {
  const value = useSelector(selectValue);
  return <Paragraph>Last updated: {value}</Paragraph>;
};

const ReduxDistributed: React.FC = () => {
  return (
    <>
      <RenderCount />

      <ValueDisplay />

      <ValueSetter />
    </>
  );
};

const ReduxDistributedWrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <ReduxDistributed />
    </Provider>
  );
};

export default ReduxDistributedWrapper;