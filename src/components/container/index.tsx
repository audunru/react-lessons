import { PropsWithChildren } from "react";
import { Menu } from "../menu";

export const Container: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="container mx-auto px-4 mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_auto] gap-x-6">
        <Menu />
        <div className="flex flex-col items-start gap-y-6">{props.children}</div>
      </div>
    </div>
  );
};
