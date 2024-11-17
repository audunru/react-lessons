import { Message } from "../../components/message";
import { MyProvider, useMyContext } from "../8-context/context";
import { ValueSetter } from "../8-context";
import { Paragraph } from "../../components/paragraph";

export const ValueDisplay: React.FC = () => {
  const { value } = useMyContext();
  return <Paragraph>Current value: {value}</Paragraph>;
};

const ReactContextLocal: React.FC = () => {
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

export const ReactContextLocalContainer: React.FC = () => {
  return (
    <MyProvider>
      <ReactContextLocal />
    </MyProvider>
  );
};
