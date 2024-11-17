interface CodeProps {
  children: string;
}

export const Code: React.FC<CodeProps> = (props) => {
  return (
    <pre className="font-mono bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
      <code>{props.children}</code>
    </pre>
  );
};
