import { PropsWithChildren } from "react";

const Title = (props: PropsWithChildren) => (
  <h1 id="main-title" className="text-3xl font-bold dark:text-gray-100 max-w-2xl">
    {props.children}
  </h1>
);

export default Title;
