import React from "react";

import { Handle, lessons } from "../../router";
import MenuLink from "../menu-link";

const MenuItems = () => {
  const groupedLessons = lessons.reduce<Record<string, typeof lessons>>((acc, lesson) => {
    const handle = lesson.handle as Handle | undefined;
    const group = handle?.group ?? "";

    if (!lesson.path || !handle?.title) {
      return acc;
    }

    if (!(group in acc)) {
      acc[group] = [];
    }

    acc[group].push(lesson);
    return acc;
  }, {});

  return (
    <nav
      aria-label="Main menu"
      className={
        "hidden peer-aria-expanded:flex peer-aria-expanded:mt-3 flex-col lg:mt-0 lg:flex z-10 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-md absolute lg:static"
      }
    >
      {Object.entries(groupedLessons).map(([groupName, lessons]) => (
        <React.Fragment key={groupName || "noGroup"}>
          {groupName && <strong className="text-2xl dark:text-gray-100 mt-5 mb-1">{groupName}</strong>}
          {lessons.map((lesson) => (
            <div key={lesson.path} className="border-b-2 border-gray-300 dark:border-gray-600 last:border-b-0">
              <MenuLink path={lesson.path ?? "/404-not-found"}>{(lesson.handle as Handle).title}</MenuLink>
            </div>
          ))}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default MenuItems;
