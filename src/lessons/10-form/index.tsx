import { Message } from "../../components/message";
import { useState } from "react";

export const Form: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <div>
        <label htmlFor={"input"}>Input</label>
      </div>
      <div>
        <input id="input" onChange={(event) => setValue(event.target.value)} value={value} />
      </div>
      <Message title="Typing into an input triggers a render">
        Every time the input changes, the component state is updated, which triggers a rerender.
      </Message>
    </>
  );
};
