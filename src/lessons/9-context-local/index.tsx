import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { UpdateContext } from "../8-context";
import { MyProvider, useMyContext } from "../8-context/context";

export const ShowContext: React.FC = () => {
  const { value } = useMyContext();

  return <Paragraph>Last updated: {value}</Paragraph>;
};

const ReactContextLocal: React.FC = () => {
  return (
    <>
      <RenderCount />
      <ShowContext />
      <UpdateContext />
    </>
  );
};

const ReactContextDistributedLesson: React.FC = () => {
  return (
    <MyProvider>
      <ReactContextLocal />
    </MyProvider>
  );
};

export default ReactContextDistributedLesson;
