import React, { PropsWithChildren } from "react";

export const Paragraph: React.FC<PropsWithChildren> = (props) => (
  <p className="dark:text-gray-100 max-w-2xl">{props.children}</p>
);
