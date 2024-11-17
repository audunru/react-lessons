import { Message } from "../../components/message";
import { MyProvider, useMyContext } from "../8-context/context";
import { ValueSetter } from "../8-context";

export const ValueDisplay: React.FC = () => {
  const { value } = useMyContext();
  return <p>Current value: {value}</p>;
};

const ReactContextLocal: React.FC = () => {
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

export const ReactContextLocalContainer: React.FC = () => {
  return (
    <MyProvider>
      <ReactContextLocal />
    </MyProvider>
  );
};
