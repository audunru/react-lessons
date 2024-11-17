import { Button } from "../../components/button";
import { Message } from "../../components/message";
import { Paragraph } from "../../components/paragraph";
import { MyProvider, useMyContext } from "./context";

export const ValueSetter: React.FC = () => {
  const { setValue } = useMyContext();

  return <Button onClick={() => setValue(new Date().toISOString())}>Update</Button>;
};

const ReactContext: React.FC = () => {
  const { value } = useMyContext();

  return (
    <>
      <Message title="Updating the context triggers a render of components that use the context">
        Child components will rerender even though they don't change.
      </Message>
      <Paragraph>Current value: {value}</Paragraph>
      <ValueSetter />
    </>
  );
};

export const ReactContextContainer: React.FC = () => {
  return (
    <MyProvider>
      <ReactContext />
    </MyProvider>
  );
};
