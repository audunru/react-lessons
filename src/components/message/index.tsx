import React from "react";
import { RenderCount } from "../render";
import { Title } from "../title";
import { Ingress } from "../ingress";

interface MessageProps {
  title: string;
  children: React.ReactNode;
}

export const Message: React.FC<MessageProps> = (props) => {
  return (
    <>
      <RenderCount />
      <Title>{props.title}</Title>
      <Ingress>{props.children}</Ingress>
    </>
  );
};
