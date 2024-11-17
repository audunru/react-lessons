import React from "react";
import { useMatches } from "react-router-dom";

import Ingress from "../ingress";
import Title from "../title";
import Counter from "./counter";

const RenderCount: React.FC = () => {
  const match = useMatches();

  const handle = match[match.length - 1].handle as Record<string, string>;

  return (
    <>
      <Counter />
      <hr className="border-b-2 border-gray-300 dark:border-gray-600 w-full max-w-xs" />
      <Title>{handle.title}</Title>
      <Ingress>{handle.description}</Ingress>
    </>
  );
};

export default RenderCount;
