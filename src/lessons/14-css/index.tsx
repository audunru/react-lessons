import React, { PropsWithChildren, useState } from "react";

import Button from "../../components/button";
import RenderCount from "../../components/render-count";
import Counter from "../../components/render-count/counter";

const ToggleButton: React.FC<PropsWithChildren> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // The parent does not rerender because the state update is limited to the ToggleButton component.
  // Using the children prop means the children do not rerender either.

  return (
    <>
      <Button
        aria-expanded={isActive}
        onClick={() => {
          setIsActive((a) => !a);
        }}
        className="peer"
      >
        Toggle
      </Button>
      <div className={"hidden peer-aria-expanded:block"}>{props.children}</div>
    </>
  );
};

const Css: React.FC = () => {
  return (
    <>
      <RenderCount />
      <ToggleButton>
        <Counter />
      </ToggleButton>
    </>
  );
};

export default Css;
