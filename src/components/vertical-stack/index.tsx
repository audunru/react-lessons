import { PropsWithChildren } from "react";

const VerticalStack = (props: PropsWithChildren) => <div className="flex flex-col gap-4">{props.children}</div>;

export default VerticalStack;
