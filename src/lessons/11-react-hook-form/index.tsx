import { useForm } from "react-hook-form";

import { Input } from "../../components/input";
import Explanation from "../../components/render-counter";

const ReactHookFormLesson: React.FC = () => {
  const { register } = useForm<{
    value: string;
  }>();

  return (
    <>
      <Explanation />
      <Input label="Input" {...register("value")} />
    </>
  );
};

export default ReactHookFormLesson;
