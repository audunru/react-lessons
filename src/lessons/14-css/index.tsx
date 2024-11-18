import { PropsWithChildren, useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";

const ToggleButton = (props: PropsWithChildren) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // The parent does not rerender because the state update is limited to the ToggleButton component.
  // Using the children prop means the children do not rerender either.

  const handleClick = () => {
    setIsActive((a) => !a);
  };

  return (
    <>
      <Button aria-expanded={isActive} onClick={handleClick} className="peer">
        Toggle
      </Button>

      <div className="hidden peer-aria-expanded:block">{props.children}</div>
    </>
  );
};

const Css = () => {
  return (
    <>
      <ToggleButton>
        <RenderCount />
      </ToggleButton>
    </>
  );
};

export default Css;
