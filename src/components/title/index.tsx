import React, { PropsWithChildren } from "react";

export const Title: React.FC<PropsWithChildren> = (props) => (
  <h1 className="text-3xl font-bold dark:text-gray-100 max-w-2xl">{props.children}</h1>
);
