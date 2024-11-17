import Paragraph from "../../components/paragraph";
import SubTitle from "../../components/sub-title";
import Title from "../../components/title";

const About: React.FC = () => {
  return (
    <>
      <Title>React Lessons</Title>
      <Paragraph>A collection of examples how common React patterns affect client side rendering.</Paragraph>
      <SubTitle>Recommandations and general tips</SubTitle>
      <Paragraph>Make multiple, smaller components instead of big ones.</Paragraph>
      <Paragraph>
        Rerendering is not a <em>bad thing</em>, the question is how often and what has to be rendered. Imagine you are
        on a page with a newsletter signup form and 10.000 unrelated table rows. You probably do not want to rerender
        the entire table when the user types their email.
      </Paragraph>
      <Paragraph>
        Your components can use lots of variables, but those variables do not have to be in <em>state</em>.
      </Paragraph>
      <Paragraph>
        Updating state in useEffect is not <em>forbidden</em>, but it is often not necessary.
      </Paragraph>
      <Paragraph>
        Popular libraries like React Router, Redux Toolkit or React Hook Form each have their own recommended patterns
        for efficient rendering. If you use one or more of these libraries, you really should read their documentation.
      </Paragraph>
      <Paragraph>CSS can be used for many interactive effects without any need for JavaScript or React code.</Paragraph>
    </>
  );
};

export default About;