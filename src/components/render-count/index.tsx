import React from "react";

import Ingress from "../ingress";
import Title from "../title";
import Counter from "./counter";
import useHandle from "./useHandle";

const RenderCount: React.FC = () => {
  const handle = useHandle();

  return (
    <>
      <Counter />

      <hr className="border-b-2 border-gray-300 dark:border-gray-600 w-full max-w-xs" />

      <Title>{handle?.title}</Title>

      <Ingress>{handle?.description}</Ingress>
    </>
  );
};

export default RenderCount;
