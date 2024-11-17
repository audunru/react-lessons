import { Provider, useSelector } from "react-redux";
import Message from "../../components/message";
import { selectValue, store } from "../12-redux/store";
import { ValueSetter } from "../12-redux";

const ValueDisplay: React.FC = () => {
  const value = useSelector(selectValue);
  return <p>Current value: {value}</p>;
};

const Redux: React.FC = () => {
  return (
    <>
      <ValueDisplay />
      <ValueSetter />
      <Message title="Distribute state where it's needed">
        Updating the state triggers a render of components that use the state
      </Message>
    </>
  );
};

const ReduxContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};

export default ReduxContainer;
