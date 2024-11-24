import Link from "../link";
import ThemeToggle from "../theme-toggle";

const Footer = () => {
  return (
    <>
      <footer className="mt-10 border-t-2 border-gray-300 pt-10 dark:border-gray-600">
        <div className="flex items-center gap-4">
          <Link href="https://github.com/audunru/react-lessons">GitHub</Link>
          <ThemeToggle />
        </div>
      </footer>
    </>
  );
};

export default Footer;
