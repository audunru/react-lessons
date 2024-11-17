import { useState } from "react";

import Input from "../../components/input";
import RenderCount from "../../components/render-count";

const Form: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <RenderCount />
      <Input
        label="Input"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </>
  );
};

export default Form;
