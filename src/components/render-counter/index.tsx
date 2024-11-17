import React from "react";
import { Counter } from "./counter";
import { Title } from "../title";
import { Ingress } from "../ingress";
import { useMatches } from "react-router-dom";

const Explanation: React.FC = () => {
  const match = useMatches();

  const handle = match[match.length - 1].handle as Record<string, string>;

  return (
    <>
      <Counter />
      <Title>{handle.title}</Title>
      <Ingress>{handle.description}</Ingress>
    </>
  );
};

export default Explanation;
