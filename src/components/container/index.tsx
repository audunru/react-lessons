import { PropsWithChildren } from "react";

import { Menu } from "../menu";
import { MenuItems } from "../menu/menu-items";

export const Container: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:grid lg:grid-cols-[400px_auto] gap-y-6 lg:gap-y-0 lg:gap-x-20">
        <div>
          <Menu>
            <MenuItems />
          </Menu>
        </div>
        <div className="flex flex-col items-start gap-y-6">{props.children}</div>
      </div>
    </div>
  );
};
