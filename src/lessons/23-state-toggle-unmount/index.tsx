import { PropsWithChildren, useState } from "react";

import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import RenderCount from "../../components/render-count";
import VerticalStack from "../../components/vertical-stack";

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
      {isActive && (
        <VerticalStack>
          {props.children}
          <Paragraph>
            The counter resets every time it&apos;s hidden. Check the console to see that it&apos;s actually rendering
            again and again.
          </Paragraph>
        </VerticalStack>
      )}
    </>
  );
};

const StateToggleWithUnmount = () => {
  // This does not rerender because the state update is limited to the ToggleButton component.

  return (
    <>
      <ToggleButton>
        <RenderCount />
      </ToggleButton>
    </>
  );
};

export default StateToggleWithUnmount;
