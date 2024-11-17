import { useForm } from "react-hook-form";

import Input from "../../components/input";
import RenderCount from "../../components/render-count";

const ReactHookFormLesson: React.FC = () => {
  const { register } = useForm<{
    value: string;
  }>();

  return (
    <>
      <RenderCount />
      <Input label="Input" {...register("value")} />
    </>
  );
};

export default ReactHookFormLesson;
