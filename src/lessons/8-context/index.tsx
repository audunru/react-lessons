import Message from "../../components/message";
import { MyProvider, useMyContext } from "./context";

export const ValueSetter: React.FC = () => {
  const { setValue } = useMyContext();

  return <button onClick={() => setValue(new Date().toISOString())}>Update</button>;
};

const ReactContext: React.FC = () => {
  const { value } = useMyContext();

  return (
    <>
      <p>Current value: {value}</p>
      <ValueSetter />
      <Message title="Updating the context triggers a render of components that use the context">
        Child components will rerender even though they don't change.
      </Message>
    </>
  );
};

const ReactContextContainer: React.FC = () => {
  return (
    <MyProvider>
      <ReactContext />
    </MyProvider>
  );
};

export default ReactContextContainer;
