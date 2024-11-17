import { useState } from "react";
import Message from "../../components/message";

const Child = () => {
  return (
    <Message title="Child component rerenders when parent state changes">
      This child component renders every time state in the parent changes, even though nothing has changed in the child.
    </Message>
  );
};

const SetStateChild: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{`Click count: ${count}`}</button>
      <Child />
    </>
  );
};

export default SetStateChild;
