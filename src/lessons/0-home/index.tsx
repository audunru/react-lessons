import { Paragraph } from "../../components/paragraph";
import { SubTitle } from "../../components/sub-title";
import { Title } from "../../components/title";

export const Home: React.FC = () => {
  return (
    <>
      <Title>React Lessons</Title>
      <Paragraph>A collection of examples how common React patterns affect client side rendering.</Paragraph>
      <SubTitle>Recommandations and general tips</SubTitle>
      <Paragraph>Make multiple, smaller components instead of big ones.</Paragraph>
      <Paragraph>
        Rerendering is not a <em>bad thing</em>, the question is how often and what has to be rendered. Imagine you are
        on a page with an email form field for a newsletter and 10.000 unrelated table rows. You probably don't want to
        rerender the entire table when the user types into the input field.
      </Paragraph>
      <Paragraph>
        Your components will use lots of variables, but those variables don't have to be <em>state</em>.
      </Paragraph>
      <Paragraph>
        useEffect is not <em>forbidden</em>, but it's often not necessary.
      </Paragraph>
      <Paragraph>
        Popular libraries like react-router, redux or react-hook-form each have their own recommended patterns for
        efficient rendering. If you use one or more of these libraries, you really should read their documentation.
      </Paragraph>
    </>
  );
};
