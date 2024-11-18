import clsx from "clsx";
import { PropsWithChildren, useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const ToggleButton = (props: PropsWithChildren) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((a) => !a);
  };

  return (
    <>
      <Button aria-expanded={isActive} onClick={handleClick}>
        {isActive ? "Hide" : "Show"}
      </Button>

      <div className={clsx(!isActive && "hidden")}>{props.children}</div>
    </>
  );
};

const StateToggleWithChildren = () => {
  // This does not rerender because the state update is limited to the ToggleButton component.

  return (
    <>
      <ToggleButton>
        <RenderCount />
      </ToggleButton>
    </>
  );
};

export default StateToggleWithChildren;
