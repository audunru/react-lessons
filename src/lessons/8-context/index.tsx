import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { MyProvider, useMyContext } from "./context";

export const UpdateContext: React.FC = () => {
  const { setValue } = useMyContext();

  const handleClick = () => {
    setValue(new Date().toISOString());
  };

  return <Button onClick={handleClick}>Update</Button>;
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

const ReactContextWrapper: React.FC = () => {
  return (
    <MyProvider>
      <ReactContext />
    </MyProvider>
  );
};

export default ReactContextWrapper;
