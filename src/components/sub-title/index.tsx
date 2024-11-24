import { PropsWithChildren } from "react";

const SubTitle = (props: PropsWithChildren) => (
  <h2 className="max-w-2xl text-2xl font-bold dark:text-gray-100">{props.children}</h2>
);

export default SubTitle;
