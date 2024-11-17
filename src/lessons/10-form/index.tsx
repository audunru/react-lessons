import { Input } from "../../components/input";
import { RenderCounter } from "../../components/render-counter";
import { useState } from "react";

export const Form: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <RenderCounter />

      <Input label="Input" onChange={(event) => setValue(event.target.value)} value={value} />
    </>
  );
};
