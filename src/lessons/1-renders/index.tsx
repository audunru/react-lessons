import { Message } from "../../components/message";

export const RendersOnce: React.FC = () => {
  return (
    <Message title="A component renders once">
      Everything in the function body happens every time the component renders. Don't let the JSX syntax trick you, it's
      just a function that receives arguments, runs its code and returns a result.
    </Message>
  );
};
