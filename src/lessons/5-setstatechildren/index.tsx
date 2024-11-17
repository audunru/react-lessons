import { PropsWithChildren, useState } from "react";
import { Message } from "../../components/message";

const Child = () => {
  return (
    <Message title="Using the children prop prevents rerendering">
      This child component is passed through a children prop, so even though the "parent" state changes, it does not
      rerender.
    </Message>
  );
};

const SetStateChildren: React.FC<PropsWithChildren> = (props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{`Click count: ${count}`}</button>
      {props.children}
    </>
  );
};

export const SetStateChildrenContainer = () => {
  return (
    <SetStateChildren>
      <Child />
    </SetStateChildren>
  );
};
