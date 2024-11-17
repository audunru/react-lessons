export const Home: React.FC = () => {
  return (
    <>
      <h1>React Lessons</h1>
      <p>A collection of examples how common React patterns affect client side rendering.</p>
      <h2>Recommandations and general tips</h2>
      <p>Make multiple, smaller components instead of big ones.</p>
      <p>
        Rerendering is not a <em>bad thing</em>, the question is how often and what has to be rendered. Imagine you are
        on a page with an email form field for a newsletter and 10.000 unrelated table rows. You probably don't want to
        rerender the entire table when the user types into the input field.
      </p>
      <p>
        Your components will use lots of variables, but those variables don't have to be <em>state</em>.
      </p>
      <p>
        useEffect is not <em>forbidden</em>, but it's often not necessary.
      </p>
      <p>
        Popular libraries like react-router, redux or react-hook-form each have their own recommended patterns for
        efficient rendering. If you use one or more of these libraries, you really should read their documentation.
      </p>
    </>
  );
};
