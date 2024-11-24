import { NavLink } from "react-router-dom";

import RenderCount from "../../components/render-count";

const CssOnly = () => {
  return (
    <>
      <NavLink
        to="/"
        className="absolute left-2 top-[-999px] rounded bg-blue-500 px-4 py-2 text-lg text-white transition-all hover:top-2 focus:top-2 focus:outline focus:outline-blue-700"
      >
        Go to home
      </NavLink>
      <RenderCount />
    </>
  );
};

export default CssOnly;
