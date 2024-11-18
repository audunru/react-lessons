import Code from "../code";
import useHandle from "../render-count/useHandle";

interface LessonCodeProps {
  children: string;
}

const LessonCode = (props: LessonCodeProps) => {
  const handle = useHandle();

  return <Code title={handle?.title}>{props.children}</Code>;
};

export default LessonCode;
