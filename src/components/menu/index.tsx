import { NavLink } from "react-router-dom";
import { lessons } from "../../router";

export const Menu: React.FC = () => {
  return (
    <nav
      aria-label="Main menu"
      className="flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md"
    >
      {lessons
        .filter((lesson) => !!lesson.path && !!lesson.handle?.title)
        .map((lesson, index) => (
          <div
            key={lesson.path}
            className={`${index !== lessons.length - 1 ? "border-b border-gray-300 dark:border-gray-600" : ""}`}
          >
            <NavLink
              to={lesson.path ?? "/404-not-found"}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 text-blue-500 dark:text-blue-700 font-bold"
                  : "block py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-800"
              }
            >
              {lesson.handle?.title}
            </NavLink>
          </div>
        ))}
    </nav>
  );
};
