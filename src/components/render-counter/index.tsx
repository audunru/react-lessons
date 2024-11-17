import React from "react";
import { useMatches } from "react-router-dom";

import { Ingress } from "../ingress";
import { Title } from "../title";
import { Counter } from "./counter";

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
