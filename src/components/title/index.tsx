import { PropsWithChildren } from "react";

const Title = (props: PropsWithChildren) => (
  <h1 id="main-title" className="max-w-2xl text-3xl font-bold dark:text-gray-100">
    {props.children}
  </h1>
);

export default Title;
