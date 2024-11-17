import React from "react";
import { lessons } from "../../router";
import MenuLink from "../menu-link";

export const MenuItems: React.FC = () => {
  return (
    <nav
      aria-label="Main menu"
      className={
        "hidden peer-aria-expanded:flex peer-aria-expanded:mt-3 flex-col lg:mt-0 lg:flex bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md absolute lg:static"
      }
    >
      {lessons
        .filter((lesson) => !!lesson.path && !!lesson.handle?.title)
        .map((lesson) => (
          <div key={lesson.path} className="border-b border-gray-300 dark:border-gray-600">
            <MenuLink path={lesson.path ?? "/404-not-found"}>{lesson.handle?.title}</MenuLink>
          </div>
        ))}
    </nav>
  );
};
