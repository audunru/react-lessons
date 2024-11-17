import { useForm } from "react-hook-form";

import Input from "../../components/input";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";

const ReactHookFormLesson: React.FC = () => {
  const { register } = useForm<{
    value: string;
  }>();

  return (
    <>
      <RenderCount />
      <Paragraph>You will still be able to access the input value when the form is submitted.</Paragraph>
      <Input label="Input" {...register("value")} />
    </>
  );
};

export default ReactHookFormLesson;
