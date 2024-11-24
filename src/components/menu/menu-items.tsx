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
        "absolute z-10 hidden flex-col rounded-lg bg-gray-100 px-4 py-2 text-gray-900 shadow-md peer-aria-expanded:mt-3 peer-aria-expanded:flex dark:bg-gray-800 dark:text-white lg:static lg:mt-0 lg:flex"
      }
    >
      {Object.entries(groupedLessons).map(([groupName, lessons]) => (
        <React.Fragment key={groupName || "noGroup"}>
          {groupName && <strong className="mb-1 mt-5 text-2xl dark:text-gray-100">{groupName}</strong>}
          {lessons.map((lesson) => (
            <div key={lesson.path} className="border-b-2 border-gray-300 last:border-b-0 dark:border-gray-600">
              <MenuLink path={lesson.path ?? "/404-not-found"}>{(lesson.handle as Handle).title}</MenuLink>
            </div>
          ))}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default MenuItems;
