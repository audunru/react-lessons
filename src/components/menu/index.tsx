import { NavLink } from "react-router-dom";
import { lessons } from "../../router";

export const Menu: React.FC = () => {
  return (
    <nav aria-label="Main menu" className="flex flex-col bg-gray-800 text-white p-4 rounded-lg shadow-md">
      {lessons
        .filter((lesson) => !!lesson.path && !!lesson.handle?.title)
        .map((lesson, index) => (
          <div key={lesson.path} className={`${index !== lessons.length - 1 ? "border-b border-gray-600" : ""}`}>
            <NavLink
              to={lesson.path}
              className={({ isActive }) =>
                isActive ? "block py-2 text-blue-400 font-bold" : "block py-2 text-gray-300 hover:text-blue-400"
              }
            >
              {lesson.handle?.title}
            </NavLink>
          </div>
        ))}
    </nav>
  );
};
