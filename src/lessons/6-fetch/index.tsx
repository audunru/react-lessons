import { useEffect, useState } from "react";
import Explanation from "../../components/render-counter";
import { Code } from "../../components/code";
import { SubTitle } from "../../components/sub-title";
import Loader from "../../components/loader";

const FetchLesson: React.FC = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();

      setValue(data);
    };
    getData();
  }, []);

  return (
    <>
      <Explanation />
      {value ? (
        <>
          <SubTitle>API response</SubTitle>
          <Code>{JSON.stringify(value, null, 2)}</Code>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default FetchLesson;
