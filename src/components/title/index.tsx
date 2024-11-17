import React, { PropsWithChildren } from "react";

const Title: React.FC<PropsWithChildren> = (props) => (
  <h1 className="text-3xl font-bold dark:text-gray-100 max-w-2xl">{props.children}</h1>
);

export default Title;
