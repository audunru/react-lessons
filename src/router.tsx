import { createHashRouter, Outlet, RouteObject } from "react-router-dom";
import { Container } from "./components/container";
import { RendersOnce } from "./lessons/1-renders";
import RendersOnceCode from "./lessons/1-renders?raw";
import { UseEffect } from "./lessons/2-useeffect";
import UseEffectCode from "./lessons/2-useeffect?raw";
import { SetState } from "./lessons/3-setstate";
import SetStateCode from "./lessons/3-setstate?raw";
import { SetStateChild } from "./lessons/4-setstatechild";
import SetStateChildCode from "./lessons/4-setstatechild?raw";
import { SetStateChildrenContainer } from "./lessons/5-setstatechildren";
import SetStateChildrenContainerCode from "./lessons/5-setstatechildren?raw";
import { Fetch } from "./lessons/6-fetch";
import FetchCode from "./lessons/6-fetch?raw";
import { ReactRouterLoader, loader as reactRouterLoader } from "./lessons/7-react-router-loader";
import ReactRouterLoaderCode from "./lessons/7-react-router-loader?raw";
import { ReactContextContainer } from "./lessons/8-context";
import ReactContextContainerCode from "./lessons/8-context?raw";
import { ReactContextLocalContainer } from "./lessons/9-context-local";
import ReactContextLocalContainerCode from "./lessons/9-context-local?raw";
import { Form } from "./lessons/10-form";
import FormCode from "./lessons/10-form?raw";
import { ReactHookForm } from "./lessons/11-react-hook-form";
import ReactHookFormCode from "./lessons/11-react-hook-form?raw";
import { ReduxContainer } from "./lessons/12-redux";
import ReduxContainerCode from "./lessons/12-redux?raw";
import { ReduxLocalContainer } from "./lessons/13-redux-local";
import ReduxLocalContainerCode from "./lessons/13-redux-local?raw";
import { Home } from "./lessons/0-home";
import { Code } from "./components/code";

import "./index.css";

export const lessons: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    handle: {
      title: "Home",
    },
  },
  {
    path: "1-functional-components",
    element: (
      <>
        <RendersOnce />
        <Code>{RendersOnceCode}</Code>
      </>
    ),
    handle: {
      title: "Functional components",
    },
  },
  {
    path: "/2-use-effect",
    element: (
      <>
        <UseEffect />
        <Code>{UseEffectCode}</Code>
      </>
    ),
    handle: {
      title: "useEffect",
    },
  },
  {
    path: "/3-use-state",
    element: (
      <>
        <SetState />
        <Code>{SetStateCode}</Code>
      </>
    ),
    handle: {
      title: "useState",
    },
  },
  {
    path: "/4-use-state-child",
    element: (
      <>
        <SetStateChild />
        <Code>{SetStateChildCode}</Code>
      </>
    ),
    handle: {
      title: "useState with child",
    },
  },
  {
    path: "/5-use-state-children",
    element: (
      <>
        <SetStateChildrenContainer />
        <Code>{SetStateChildrenContainerCode}</Code>
      </>
    ),
    handle: {
      title: "useState with children",
    },
  },
  {
    path: "/6-fetch",
    element: (
      <>
        <Fetch />
        <Code>{FetchCode}</Code>
      </>
    ),
    handle: {
      title: "Fetch from API",
    },
  },
  {
    path: "/7-react-router-dom-loader",
    element: (
      <>
        <ReactRouterLoader />
        <Code>{ReactRouterLoaderCode}</Code>
      </>
    ),
    loader: reactRouterLoader,
    handle: {
      title: "Fetch with React Router",
    },
  },
  {
    path: "/8-react-context",
    element: (
      <>
        <ReactContextContainer />
        <Code>{ReactContextContainerCode}</Code>
      </>
    ),
    handle: {
      title: "React Context",
    },
  },
  {
    path: "/9-ReactContextLocal",
    element: (
      <>
        <ReactContextLocalContainer />
        <Code>{ReactContextLocalContainerCode}</Code>
      </>
    ),
    handle: {
      title: "React Context with distributed state",
    },
  },
  {
    path: "/10-Form",
    element: (
      <>
        <Form />
        <Code>{FormCode}</Code>
      </>
    ),
    handle: {
      title: "Form and useState",
    },
  },
  {
    path: "/11-ReactHookForm",
    element: (
      <>
        <ReactHookForm />
        <Code>{ReactHookFormCode}</Code>
      </>
    ),
    handle: {
      title: "Form with React Hook Form",
    },
  },
  {
    path: "/12-Redux",
    element: (
      <>
        <ReduxContainer />
        <Code>{ReduxContainerCode}</Code>
      </>
    ),
    handle: {
      title: "Redux",
    },
  },
  {
    path: "/13-ReduxLocal",
    element: (
      <>
        <ReduxLocalContainer />
        <Code>{ReduxLocalContainerCode}</Code>
      </>
    ),
    handle: {
      title: "Redux with distributed state",
    },
  },
];

const routes: RouteObject[] = [
  {
    element: (
      <Container>
        <Outlet />
      </Container>
    ),
    children: lessons,
  },
];

export const router = createHashRouter(routes);
