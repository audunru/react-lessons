import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { MyProvider, useMyContext } from "./context";

export const UpdateContext: React.FC = () => {
  const { setValue } = useMyContext();

  return (
    <Button
      onClick={() => {
        setValue(new Date().toISOString());
      }}
    >
      Update
    </Button>
  );
};

const ReactContext: React.FC = () => {
  const { value } = useMyContext();

  return (
    <>
      <RenderCount />
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
