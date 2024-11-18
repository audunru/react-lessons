import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { useEffect, useRef } from "react";

import SubTitle from "../sub-title";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

interface CodeProps {
  title?: string;
  children: string;
  language?: string;
}

const Code = ({ children, language = "typescript", title }: CodeProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute("data-highlighted");
      hljs.highlightElement(codeRef.current);
      codeRef.current.setAttribute("data-highlighted", "true");
    }
  }, [children, language]);

  return (
    <>
      {title && <SubTitle>{title}</SubTitle>}
      <pre className="font-mono">
        <code ref={codeRef} className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </>
  );
};

export default Code;
