import { Provider, useSelector } from "react-redux";
import { RenderCounter } from "../../components/render-counter";
import { selectValue, store } from "../12-redux/store";
import { ValueSetter } from "../12-redux";
import { Paragraph } from "../../components/paragraph";

const ValueDisplay: React.FC = () => {
  const value = useSelector(selectValue);
  return <Paragraph>Current value: {value}</Paragraph>;
};

const Redux: React.FC = () => {
  return (
    <>
      <RenderCounter />

      <ValueDisplay />
      <ValueSetter />
    </>
  );
};

export const ReduxLocalContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};
