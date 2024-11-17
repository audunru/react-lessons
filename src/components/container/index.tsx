import { PropsWithChildren } from "react";
import { Menu } from "../menu";

export const Container: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:grid lg:grid-cols-[400px_auto] gap-y-6 lg:gap-y-0 lg:gap-x-20">
        <Menu />
        <div className="flex flex-col items-start gap-y-6">{props.children}</div>
      </div>
    </div>
  );
};
