interface CodeProps {
  children: string;
}

export const Code: React.FC<CodeProps> = (props) => {
  return (
    <pre className="font-mono bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-4 rounded-lg overflow-x-auto text-sm shadow-md">
      <code>{props.children}</code>
    </pre>
  );
};
