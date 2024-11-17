import { Provider, useSelector } from "react-redux";
import { Message } from "../../components/message";
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
      <Message title="Distribute state where it's needed">
        Updating the state triggers a render of components that use the state
      </Message>
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
