import { Input } from "../../components/input";
import { Message } from "../../components/message";
import { useForm } from "react-hook-form";

export const ReactHookForm: React.FC = () => {
  const { register } = useForm<{
    value: string;
  }>();

  return (
    <>
      <Message title="React Hook Form avoids rerenders">
        The specialized package react-hook-form tries to avoid rerendering.
      </Message>
      <Input label="Input" {...register("value")} />
    </>
  );
};
