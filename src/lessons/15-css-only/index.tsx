import React from "react";
import { NavLink } from "react-router-dom";

import Explanation from "../../components/render-counter";

const CssOnlyLesson: React.FC = () => {
  return (
    <>
      <Explanation />
      <NavLink
        to="/"
        className="absolute top-[-999px] left-2 bg-blue-500 text-white px-4 py-2 text-lg rounded focus:top-2 hover:top-2 focus:outline focus:outline-blue-700 transition-all"
      >
        Go to home
      </NavLink>
    </>
  );
};

export default CssOnlyLesson;
