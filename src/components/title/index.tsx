import type { PropsWithChildren } from "react";

const Title = (props: PropsWithChildren) => (
  <h1 className="max-w-2xl text-3xl font-bold dark:text-gray-100" id="main-title">
    {props.children}
  </h1>
);

export default Title;
