import { Input } from "../../components/input";
import { Message } from "../../components/message";
import { useState } from "react";

export const Form: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Message title="Typing into an input triggers a render">
        Every time the input changes, the component state is updated, which triggers a rerender.
      </Message>
      <Input label="Input" onChange={(event) => setValue(event.target.value)} value={value} />
    </>
  );
};
