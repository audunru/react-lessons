import React from "react";
import RenderCount from "../render";

interface MessageProps {
  title: string;
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = (props) => {
  return (
    <>
      <RenderCount />
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.children}</dd>
      </dl>
    </>
  );
};

export default Message;
