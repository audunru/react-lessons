import { RenderCounter } from "../../components/render-counter";
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
      <RenderCounter />

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
