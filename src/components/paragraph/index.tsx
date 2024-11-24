import { PropsWithChildren } from "react";

const Paragraph = (props: PropsWithChildren) => (
  <p className="max-w-2xl text-lg dark:text-gray-100">{props.children}</p>
);

export default Paragraph;
