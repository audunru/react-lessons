import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import React, { useEffect, useRef } from "react";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

interface CodeProps {
  children: string;
  language?: string;
}

const Code: React.FC<CodeProps> = ({ children, language = "typescript" }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute("data-highlighted");
      hljs.highlightElement(codeRef.current);
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
