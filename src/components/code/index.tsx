import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import React, { useEffect, useRef } from "react";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

interface CodeProps {
  title?: string;
  children: string;
  language?: string;
}

const Code: React.FC<CodeProps> = ({ children, language = "typescript", title }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute("data-highlighted");
      hljs.highlightElement(codeRef.current);
      codeRef.current.setAttribute("data-highlighted", "true");
    }
  }, [children, language]);

  return (
    <pre className="font-mono">
      {title && <div className="mb-2 text-sm font-bold text-gray-800 dark:text-gray-300">{title}</div>}
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default Code;
