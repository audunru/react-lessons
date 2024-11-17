import { Paragraph } from "../../components/paragraph";
import Explanation from "../../components/render-counter";
import { UpdateContext } from "../8-context";
import { MyProvider, useMyContext } from "../8-context/context";

export const ShowContext: React.FC = () => {
  const { value } = useMyContext();

  return <Paragraph>Last updated: {value}</Paragraph>;
};

const ReactContextLocal: React.FC = () => {
  return (
    <>
      <Explanation />
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
