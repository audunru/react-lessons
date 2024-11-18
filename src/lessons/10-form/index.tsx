import { useState } from "react";

import Input from "../../components/input";
import RenderCount from "../../components/render-count";

const Form = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <RenderCount />

      <Input label="Input" onChange={handleChange} value={value} />
    </>
  );
};

export default Form;
