import React, { PropsWithChildren, useState } from "react";

import { Button } from "../../components/button";
import Explanation from "../../components/render-counter";
import { Counter } from "../../components/render-counter/counter";

const ToggleButton: React.FC<PropsWithChildren> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // The parent does not rerender because the state update is limited to the ToggleButton component.
  // Using the children prop means the children do not rerender either.

  return (
    <>
      <Button
        aria-expanded={isActive}
        onClick={() => {
          setIsActive((x) => !x);
        }}
        className="peer"
      >
        Toggle
      </Button>
      <div className={"hidden peer-aria-expanded:block"}>{props.children}</div>
    </>
  );
};

const CssLesson: React.FC = () => {
  return (
    <>
      <Explanation />
      <ToggleButton>
        <Counter />
      </ToggleButton>
    </>
  );
};

export default CssLesson;
