import { Input } from "../../components/input";
import Explanation from "../../components/render-counter";
import { useState } from "react";

const FormLesson: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Explanation />
      <Input label="Input" onChange={(event) => setValue(event.target.value)} value={value} />
    </>
  );
};

export default FormLesson;
