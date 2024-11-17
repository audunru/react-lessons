import Message from "../../components/message";
import { useForm } from "react-hook-form";

const ReactHookForm: React.FC = () => {
  const { register } = useForm<{
    value: string;
  }>();

  return (
    <>
      <div>
        <label htmlFor={"input"}>Input</label>
      </div>
      <div>
        <input id="input" {...register("value")} />
      </div>
      <Message title="React Hook Form avoids rerenders">
        The specialized package react-hook-form tries to avoid rerendering.
      </Message>
    </>
  );
};

export default ReactHookForm;
