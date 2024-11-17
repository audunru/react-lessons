import React from "react";
import { RenderCount } from "../render";

interface MessageProps {
  title: string;
  children: React.ReactNode;
}

export const Message: React.FC<MessageProps> = (props) => {
  return (
    <>
      <RenderCount />
      <h1>{props.title}</h1>
      <p>{props.children}</p>
    </>
  );
};
