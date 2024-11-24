import { PropsWithChildren } from "react";

const Ingress = (props: PropsWithChildren) => <p className="max-w-2xl text-xl dark:text-gray-100">{props.children}</p>;

export default Ingress;
