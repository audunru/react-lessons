import { useForm } from "react-hook-form";

import Input from "../../components/input";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";

interface FormType {
  value: string;
}

const ReactHookForm = () => {
  const { register } = useForm<FormType>();

  return (
    <>
      <Paragraph>You will still be able to access the input value when the form is submitted.</Paragraph>
      <Input label="Input" {...register("value")} />
      <RenderCount />
    </>
  );
};

export default ReactHookForm;
