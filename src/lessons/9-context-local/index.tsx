import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { UpdateContext } from "../8-context";
import { MyProvider, useMyContext } from "../8-context/context";

export const ShowContext = () => {
  const { value } = useMyContext();

  return <Paragraph>Last updated: {value}</Paragraph>;
};

const ReactContextLocal = () => {
  return (
    <>
      <ShowContext />
      <UpdateContext />
      <RenderCount />
    </>
  );
};

const ReactContextDistributed = () => {
  return (
    <MyProvider>
      <ReactContextLocal />
    </MyProvider>
  );
};

export default ReactContextDistributed;
