import React, { PropsWithChildren } from "react";

export const Ingress: React.FC<PropsWithChildren> = (props) => (
  <p className="text-xl dark:text-gray-100 max-w-2xl">{props.children}</p>
);