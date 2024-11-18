import clsx from "clsx";
import { useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const StateToggle = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((a) => !a);
  };

  return (
    <>
      <Button aria-expanded={isActive} onClick={handleClick}>
        {isActive ? "Hide" : "Show"}
      </Button>

      <div className={clsx(!isActive && "hidden")}>
        <RenderCount />
      </div>
    </>
  );
};

export default StateToggle;
