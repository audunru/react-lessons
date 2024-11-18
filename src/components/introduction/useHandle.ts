import { useMatches } from "react-router-dom";

import { Handle } from "../../router";

const useHandle = (): Handle | undefined => {
  const match = useMatches();

  const handle = match[match.length - 1].handle;

  if (handle) {
    return handle as Handle;
  }
};

export default useHandle;
