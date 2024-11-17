import { createRoot } from "react-dom/client";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { Container } from "./components/container";
import { RendersOnce } from "./lessons/1-renders";
import RendersOnceCode from "./lessons/1-renders?raw";
import { UseEffect } from "./lessons/2-useeffect";
import { SetState } from "./lessons/3-setstate";
import { SetStateChild } from "./lessons/4-setstatechild";
import { SetStateChildrenContainer } from "./lessons/5-setstatechildren";
import { Fetch } from "./lessons/6-fetch";
import { ReactRouterLoader, loader as reactRouterLoader } from "./lessons/7-react-router-loader";
import { ReactContextContainer } from "./lessons/8-context";
import { ReactContextLocalContainer } from "./lessons/9-context-local";
import { Form } from "./lessons/10-form";
import { ReactHookForm } from "./lessons/11-react-hook-form";
import { ReduxContainer } from "./lessons/12-redux";
import { ReduxLocalContainer } from "./lessons/13-redux-local";
import { Home } from "./lessons/0-home";
import { Code } from "./components/code";

const router = createHashRouter([
  {
    element: (
      <Container>
        <Outlet />
      </Container>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "1-RendersOnce",
        element: (
          <>
            <RendersOnce />
            <Code>{RendersOnceCode}</Code>
          </>
        ),
      },
      { path: "2-UseEffect", element: <UseEffect /> },
      { path: "3-SetState", element: <SetState /> },
      { path: "4-SetStateChild", element: <SetStateChild /> },
      { path: "5-SetStateChildren", element: <SetStateChildrenContainer /> },
      { path: "6-Fetch", element: <Fetch /> },
      { path: "7-ReactRouterLoader", element: <ReactRouterLoader />, loader: reactRouterLoader },
      { path: "8-ReactContext", element: <ReactContextContainer /> },
      { path: "9-ReactContextLocal", element: <ReactContextLocalContainer /> },
      { path: "10-Form", element: <Form /> },
      { path: "11-ReactHookForm", element: <ReactHookForm /> },
      { path: "12-Redux", element: <ReduxContainer /> },
      { path: "13-ReduxLocal", element: <ReduxLocalContainer /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
