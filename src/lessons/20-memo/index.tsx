import React, { useState } from "react";

import Box from "../../components/box";
import Input from "../../components/input";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import { Value } from "../19-props";

const MemoizedValue = React.memo(Value);

const Memo: React.FC = () => {
  const [valueA, setValueA] = useState<string>("");
  const [valueB, setValueB] = useState<string>("");

  return (
    <>
      <RenderCount />

      <Paragraph>
        Splitting a large component into multiple components, and moving state down to where it is needed will achieve
        the same effect.
      </Paragraph>

      <div className="flex gap-4">
        <Box>
          <Input
            label="Input A"
            onChange={(event) => {
              setValueA(event.target.value);
            }}
            value={valueA}
          />
          <MemoizedValue value={valueA} />
        </Box>

        <Box>
          <Input
            label="Input B"
            onChange={(event) => {
              setValueB(event.target.value);
            }}
            value={valueB}
          />
          <MemoizedValue value={valueB} />
        </Box>
      </div>
    </>
  );
};

export default Memo;
