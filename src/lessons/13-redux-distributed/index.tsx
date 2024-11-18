import { Provider, useSelector } from "react-redux";

import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { ValueSetter } from "../12-redux";
import { selectValue, store } from "../12-redux/store";

const ValueDisplay = () => {
  const value = useSelector(selectValue);
  return <Paragraph>Last updated: {value}</Paragraph>;
};

const ReduxDistributed = () => {
  return (
    <>
      <ValueDisplay />

      <ValueSetter />

      <RenderCount />
    </>
  );
};

const ReduxDistributedWrapper = () => {
  return (
    <Provider store={store}>
      <ReduxDistributed />
    </Provider>
  );
};

export default ReduxDistributedWrapper;
