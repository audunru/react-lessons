interface CodeProps {
  children: string;
}

export const Code: React.FC<CodeProps> = (props) => {
  return <pre>{props.children}</pre>;
};
