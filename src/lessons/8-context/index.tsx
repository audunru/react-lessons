import { Button } from "../../components/button";
import Explanation from "../../components/render-counter";
import { Paragraph } from "../../components/paragraph";
import { MyProvider, useMyContext } from "./context";

export const UpdateContext: React.FC = () => {
  const { setValue } = useMyContext();

  return <Button onClick={() => setValue(new Date().toISOString())}>Update</Button>;
};

const ReactContext: React.FC = () => {
  const { value } = useMyContext();

  return (
    <>
      <Explanation />
      <Paragraph>Last updated: {value}</Paragraph>
      <UpdateContext />
    </>
  );
};

const ReactContextLesson: React.FC = () => {
  return (
    <MyProvider>
      <ReactContext />
    </MyProvider>
  );
};

export default ReactContextLesson;
