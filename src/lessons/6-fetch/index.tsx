import { useEffect, useState } from "react";

import { Code } from "../../components/code";
import Loader from "../../components/loader";
import Explanation from "../../components/render-counter";
import { SubTitle } from "../../components/sub-title";

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
