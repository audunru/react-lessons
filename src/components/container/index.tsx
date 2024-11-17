import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

import Footer from "../footer";
import Menu from "../menu";
import MenuItems from "../menu/menu-items";
import useHandle from "../render-count/useHandle";

const Container: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const handle = useHandle();
  return (
    <>
      <Helmet>
        <title>{handle?.title} - React Lessons</title>
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-[400px_auto] gap-y-6 lg:gap-y-0 lg:gap-x-20">
          <div>
            <Menu>
              <MenuItems />
            </Menu>
          </div>
          <div className="flex flex-col items-start gap-y-6">{props.children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Container;
