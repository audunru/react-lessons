import React from "react";

import Code from "../code";
import useHandle from "../render-count/useHandle";

interface LessonCodeProps {
  children: string;
}

const LessonCode: React.FC<LessonCodeProps> = ({ children }) => {
  const handle = useHandle();

  return <Code title={handle?.title}>{children}</Code>;
};

export default LessonCode;
