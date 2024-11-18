import { PropsWithChildren } from "react";

const Paragraph = (props: PropsWithChildren) => (
  <p className="text-lg dark:text-gray-100 max-w-2xl">{props.children}</p>
);

export default Paragraph;
