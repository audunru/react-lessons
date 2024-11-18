import React, { useState } from "react";

import Box from "../../components/box";
import Input from "../../components/input";
import Paragraph from "../../components/paragraph";
import Stack from "../../components/stack";
import { Value } from "../19-props";

const MemoizedValue = React.memo(Value);

const Memo = () => {
  const [valueA, setValueA] = useState<string>("");
  const [valueB, setValueB] = useState<string>("");

  return (
    <>
      <Paragraph>
        Splitting a large component into multiple components, and moving state down to where it&apos;s needed will
        achieve the same effect.
      </Paragraph>

      <Stack>
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
      </Stack>
    </>
  );
};

export default Memo;
