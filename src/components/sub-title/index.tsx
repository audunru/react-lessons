import { PropsWithChildren } from "react";

const SubTitle = (props: PropsWithChildren) => (
  <h2 className="text-2xl font-bold dark:text-gray-100 max-w-2xl">{props.children}</h2>
);

export default SubTitle;
