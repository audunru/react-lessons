import Ingress from "../ingress";
import Title from "../title";
import useHandle from "./useHandle";

const Introduction = () => {
  const handle = useHandle();

  return (
    <>
      <Title>{handle?.title}</Title>
      <Ingress>{handle?.description}</Ingress>
    </>
  );
};

export default Introduction;
