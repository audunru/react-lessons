import { Input } from "../../components/input";
import { RenderCounter } from "../../components/render-counter";
import { useForm } from "react-hook-form";

export const ReactHookForm: React.FC = () => {
  const { register } = useForm<{
    value: string;
  }>();

  return (
    <>
      <RenderCounter />
      <Input label="Input" {...register("value")} />
    </>
  );
};
