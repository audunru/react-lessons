import React from "react";

import Link from "../link";
import Paragraph from "../paragraph";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="mt-10 pt-10 border-t-2 border-gray-300 dark:border-gray-600">
        <Paragraph>
          <Link href="https://github.com/audunru/react-lessons">GitHub</Link>
        </Paragraph>
      </footer>
    </>
  );
};

export default Footer;
