import { useState } from "react";

import Box from "../../components/box";
import Input from "../../components/input";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import Counter from "../../components/render-count/counter";
import Stack from "../../components/stack";

interface ValueProps {
  value: string;
}

export const Value = (props: ValueProps) => {
  return (
    <>
      <Paragraph>Value is {props.value}</Paragraph>

      <Counter />
    </>
  );
};

const Props = () => {
  const [valueA, setValueA] = useState<string>("");
  const [valueB, setValueB] = useState<string>("");

  return (
    <>
      <RenderCount />

      <Stack>
        <Box>
          <Input
            label="Input A"
            onChange={(event) => {
              setValueA(event.target.value);
            }}
            value={valueA}
          />
          <Value value={valueA} />
        </Box>

        <Box>
          <Input
            label="Input B"
            onChange={(event) => {
              setValueB(event.target.value);
            }}
            value={valueB}
          />
          <Value value={valueB} />
        </Box>
      </Stack>
    </>
  );
};

export default Props;
