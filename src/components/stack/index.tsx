import { PropsWithChildren } from "react";

const Stack = (props: PropsWithChildren) => <div className="flex gap-4">{props.children}</div>;

export default Stack;
