import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Choose your preferred theme

interface CodeProps {
  children: string;
  language?: string; // Defaults to 'typescript' if not provided
}

const Code: React.FC<CodeProps> = ({ children, language = "typescript" }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Unset any previous highlights
      codeRef.current.removeAttribute("data-highlighted");
      // Highlight the code block
      hljs.highlightElement(codeRef.current);
      // Mark as highlighted
      codeRef.current.setAttribute("data-highlighted", "true");
    }
  }, [children, language]);

  return (
    <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto shadow-md">
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default Code;
