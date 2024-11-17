import { useState } from "react";
import { Message } from "../../components/message";

export const SetState: React.FC = () => {
  const [state, setState] = useState<number>(1);

  return (
    <>
      <button onClick={() => setState(state + 1)}>{"Click"}</button>
      <Message title="Updating state triggers an extra render">
        The entire function is run again when state is updated.
      </Message>
    </>
  );
};
