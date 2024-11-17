import { useState } from "react";
import { Message } from "../../components/message";
import { Button } from "../../components/button";

const Child = () => {
  return (
    <Message title="Child component rerenders when parent state changes">
      This child component renders every time state in the parent changes, even though nothing has changed in the child.
    </Message>
  );
};

export const SetStateChild: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Child />
      <Button onClick={() => setCount(count + 1)}>{`Click count: ${count}`}</Button>
    </>
  );
};
