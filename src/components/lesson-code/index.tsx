import Code from "../code";

interface LessonCodeProps {
  children: string;
}

const LessonCode = (props: LessonCodeProps) => {
  return <Code title="Example code">{props.children}</Code>;
};

export default LessonCode;
