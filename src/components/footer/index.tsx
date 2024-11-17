import React from "react";
import { Paragraph } from "../paragraph";
import Link from "../link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="mt-10 pt-10 border-t border-gray-300 dark:border-gray-600">
        <Paragraph>
          <Link href="https://github.com/audunru/react-lessons">GitHub</Link>
        </Paragraph>
      </footer>
    </>
  );
};

export default Footer;
