import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { MyProvider, useMyContext } from "./context";

export const UpdateContext = () => {
  const { setValue } = useMyContext();

  const handleClick = () => {
    setValue(new Date().toISOString());
  };

  return <Button onClick={handleClick}>Update</Button>;
};

const ReactContext = () => {
  const { value } = useMyContext();

  return (
    <>
      <Paragraph>Last updated: {value}</Paragraph>

      <UpdateContext />

      <RenderCount />
    </>
  );
};

const ReactContextWrapper = () => {
  return (
    <MyProvider>
      <ReactContext />
    </MyProvider>
  );
};

export default ReactContextWrapper;
