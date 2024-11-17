const Home: React.FC = () => {
  return (
    <>
      <h1>React Lessons</h1>
      <p>A collection of examples how common React patterns affect client side rendering.</p>
      <ul>
        <li>
          Rerendering is not a <em>bad thing</em>. Imagine you are on a page with an input field and 10000 table rows.
          You probably don't want to rerender the entire table when the user types into the input field.
        </li>
        <li>
          Your components will use lots of variables, but those variables don't have to be <em>state</em>.
        </li>
        <li>
          useEffect is not <em>forbidden</em>, but it's often not necessary.
        </li>
        <li>
          Popular libraries like react-router, redux or react-hook-form each have their own recommended patterns for
          efficient rendering. If you use one or more of these libraries, you should read their documentation.
        </li>
      </ul>
    </>
  );
};

export default Home;
