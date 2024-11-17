import { createHashRouter, Outlet, RouteObject } from "react-router-dom";
import { Container } from "./components/container";
import RendersOnce from "./lessons/1-renders";
import RendersOnceCode from "./lessons/1-renders?raw";
import UseEffect from "./lessons/2-useeffect";
import UseEffectCode from "./lessons/2-useeffect?raw";
import SetState from "./lessons/3-setstate";
import SetStateCode from "./lessons/3-setstate?raw";
import SetStateChild from "./lessons/4-setstatechild";
import SetStateChildCode from "./lessons/4-setstatechild?raw";
import SetStateChildrenContainer from "./lessons/5-setstatechildren";
import SetStateChildrenContainerCode from "./lessons/5-setstatechildren?raw";
import Fetch from "./lessons/6-fetch";
import FetchCode from "./lessons/6-fetch?raw";
import ReactRouterLoader, { loader as reactRouterLoader } from "./lessons/7-react-router-loader";
import ReactRouterLoaderCode from "./lessons/7-react-router-loader?raw";
import ReactContextContainer from "./lessons/8-context";
import ReactContextContainerCode from "./lessons/8-context?raw";
import ReactContextLocalContainer from "./lessons/9-context-local";
import ReactContextLocalContainerCode from "./lessons/9-context-local?raw";
import Form from "./lessons/10-form";
import FormCode from "./lessons/10-form?raw";
import ReactHookForm from "./lessons/11-react-hook-form";
import ReactHookFormCode from "./lessons/11-react-hook-form?raw";
import ReduxContainer from "./lessons/12-redux";
import ReduxContainerCode from "./lessons/12-redux?raw";
import ReduxLocalContainer from "./lessons/13-redux-local";
import ReduxLocalContainerCode from "./lessons/13-redux-local?raw";
import { Home } from "./lessons/0-home";
import { Code } from "./components/code";
import ErrorElement from "./components/error";
import CssLesson from "./lessons/14-css";
import CssLessonCode from "./lessons/14-css?raw";

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
    path: "/1-functional-components",
    element: (
      <>
        <RendersOnce />
        <Code>{RendersOnceCode}</Code>
      </>
    ),
    handle: {
      title: "Functional components",
      description:
        "Don't let the JSX syntax trick you! Functional components are just functions that receive arguments, run their code and return a value.",
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
      description:
        "Updating state in useEffect causes an extra render. If you have a value (i.e. from a prop), and you need to transform it into something else, you can just do it in the body of the function.",
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
      description: "Updating state triggers an extra render. The entire function is run again when state is updated.",
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
      description:
        "The child component rerenders when parent state changes, even though nothing has changed in the child.",
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
      description: "Using the children prop prevents rerendering when the parent state changes.",
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
      description:
        "Fetching data in a useEffect causes an extra render. During the first render, the data is undefined, and updating state will trigger a new render.",
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
      description: "In React Router, you can use loader functions to load data before your component renders.",
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
      description:
        "Updating the React context triggers a rerender of components that use the context. Child components will rerender even though they don't use the context.",
    },
  },
  {
    path: "/9-react-context-distributed",
    element: (
      <>
        <ReactContextLocalContainer />
        <Code>{ReactContextLocalContainerCode}</Code>
      </>
    ),
    handle: {
      title: "React Context with distributed state",
      description:
        "Updating the context triggers a rerender of components that use the context. Create separate components to limit the amount of rerendering.",
    },
  },
  {
    path: "/10-form",
    element: (
      <>
        <Form />
        <Code>{FormCode}</Code>
      </>
    ),
    handle: {
      title: "Form and useState",
      description: "Every time the input changes, the component state is updated, which triggers a rerender.",
    },
  },
  {
    path: "/11-react-hook-form",
    element: (
      <>
        <ReactHookForm />
        <Code>{ReactHookFormCode}</Code>
      </>
    ),
    handle: {
      title: "Form with React Hook Form",
      description:
        "The package React Hook Form tries to avoid rerendering. Typing in the input field does not trigger a rerender.",
    },
  },
  {
    path: "/12-redux",
    element: (
      <>
        <ReduxContainer />
        <Code>{ReduxContainerCode}</Code>
      </>
    ),
    handle: {
      title: "Redux",
      description:
        "Updating the Redux store triggers a rerender of components that use the store. Child components will rerender even though they don't use the store.",
    },
  },
  {
    path: "/13-redux-distributed",
    element: (
      <>
        <ReduxLocalContainer />
        <Code>{ReduxLocalContainerCode}</Code>
      </>
    ),
    handle: {
      title: "Redux with distributed state",
      description:
        "Updating the Redux store triggers a rerender of components that use the store. Create separate components to limit the amount of rerendering.",
    },
  },
  {
    path: "/13-css",
    element: (
      <>
        <CssLesson />
        <Code>{CssLessonCode}</Code>
      </>
    ),
    handle: {
      title: "CSS Toggle",
      description:
        "State is used to control the aria-expanded attribute on the button for accessibility reasons, but the visibility is controlled by CSS.",
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
    errorElement: <ErrorElement />,
    children: lessons,
  },
];

export const router = createHashRouter(routes);
