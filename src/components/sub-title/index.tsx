import React, { PropsWithChildren } from "react";

export const SubTitle: React.FC<PropsWithChildren> = (props) => (
  <h2 className="text-2xl font-bold dark:text-gray-100 max-w-2xl">{props.children}</h2>
);
