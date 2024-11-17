interface CodeProps {
  children: string;
}

export const Code: React.FC<CodeProps> = (props: CodeProps) => {
  return (
    <pre className="font-mono bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 p-4 rounded-lg overflow-x-auto shadow-md">
      <code>{props.children}</code>
    </pre>
  );
};
