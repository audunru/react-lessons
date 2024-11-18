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
      <Button aria-expanded={isActive} onClick={handleClick} className="peer">
        {isActive ? "Hide" : "Show"}
      </Button>
      <div className="hidden peer-aria-expanded:block">{props.children}</div>
    </>
  );
};

const CssToggle = () => {
  // This does not rerender because the state update is limited to the ToggleButton component.

  return (
    <>
      <ToggleButton>
        <RenderCount />
      </ToggleButton>
    </>
  );
};

export default CssToggle;
