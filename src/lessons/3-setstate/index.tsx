import { useState } from "react";
import { Message } from "../../components/message";
import { Button } from "../../components/button";

export const SetState: React.FC = () => {
  const [state, setState] = useState<number>(1);

  return (
    <>
      <Message title="Updating state triggers an extra render">
        The entire function is run again when state is updated.
      </Message>
      <Button onClick={() => setState(state + 1)}>{"Click"}</Button>
    </>
  );
};
