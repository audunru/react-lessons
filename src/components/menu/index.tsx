import { lessons } from "../../router";
import MenuLink from "../menu-link";

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
            <MenuLink path={lesson.path ?? "/404-not-found"}>{lesson.handle?.title}</MenuLink>
          </div>
        ))}
    </nav>
  );
};
