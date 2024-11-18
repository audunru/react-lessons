import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";

import Footer from "../footer";
import useHandle from "../introduction/useHandle";
import Menu from "../menu";
import MenuItems from "../menu/menu-items";

const Container = (props: PropsWithChildren) => {
  const handle = useHandle();
  return (
    <>
      <Helmet>
        <title>{handle?.title} - React Lessons</title>
      </Helmet>

      <div className="container mx-auto px-4">
        <ScrollRestoration />
        <main
          className="flex flex-col lg:grid lg:grid-cols-[400px_auto] gap-y-6 lg:gap-y-0 lg:gap-x-20"
          aria-labelledby="main-title"
        >
          <div>
            <Menu>
              <MenuItems />
            </Menu>
          </div>
          <div className="flex flex-col items-start gap-y-6">{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Container;
