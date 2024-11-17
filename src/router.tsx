import "./index.css";

import React from "react";
import { createHashRouter, Outlet, RouteObject } from "react-router-dom";

import Container from "./components/container";
import ErrorElement from "./components/error";
import Code from "./components/lesson-code";
import { Home } from "./lessons/0-home";
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
import CssLesson from "./lessons/14-css";
import CssLessonCode from "./lessons/14-css?raw";
import CssOnlyLesson from "./lessons/15-css-only";
import CssOnlyLessonCode from "./lessons/15-css-only?raw";
import ReactQuery from "./lessons/16-react-query";
import ReactQueryCode from "./lessons/16-react-query?raw";
import ReduxAsyncThunkLesson from "./lessons/17-redux-async-thunk";
import ReduxAsyncThunkLessonCode from "./lessons/17-redux-async-thunk?raw";
import ReduxAsyncThunkDistributedLesson from "./lessons/18-redux-async-thunk-distributed";
import ReduxAsyncThunkDistributedLessonCode from "./lessons/18-redux-async-thunk-distributed?raw";
import PropsLesson from "./lessons/19-props";
import PropsLessonCode from "./lessons/19-props?raw";
import MemoLesson from "./lessons/20-memo";
import MemoLessonCode from "./lessons/20-memo?raw";

export interface Handle {
  title: string;
  description?: React.ReactNode;
  group?: string;
}

export const lessons: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    handle: {
      title: "Home",
    } satisfies Handle,
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
        "Functional components are just functions that receive arguments, run their code and return a value.",
      group: "Props",
    } satisfies Handle,
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
      group: "State",
      title: "useEffect",
      description:
        "Updating state in useEffect causes an extra render. If you have a value (i.e. from a prop), and you need to transform it into something else, you can just do it in the body of the function.",
    } satisfies Handle,
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
      group: "State",
      title: "useState",
      description: "Updating state triggers an extra render. The entire function is run again when state is updated.",
    } satisfies Handle,
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
      group: "State",
      title: "useState with child",
      description:
        "Child components rerender when parent state changes, even if nothing changes in the child components.",
    } satisfies Handle,
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
      group: "State",
      title: "useState with children",
      description: "Using the children prop prevents rerendering when the parent state changes.",
    } satisfies Handle,
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
      group: "Fetch",
      title: "Fetch from API",
      description:
        "Fetching data in a useEffect causes an extra render. During the first render, the data is undefined, and updating state will trigger a new render.",
    } satisfies Handle,
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
      group: "Fetch",
      title: "Fetch with React Router",
      description: "In React Router, you can use loader functions to load data before your component renders.",
    } satisfies Handle,
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
      group: "Flux",
      title: "React Context",
      description:
        "Updating the React context triggers a rerender of components that use the context. Child components will rerender even though they don't use the context.",
    } satisfies Handle,
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
      group: "Flux",
      title: "React Context with distributed state",
      description:
        "Updating the context triggers a rerender of components that use the context. Create separate components to limit the amount of rerendering.",
    } satisfies Handle,
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
      group: "State",
      title: "Form and useState",
      description: "Every time the input changes, the component state is updated, which triggers a rerender.",
    } satisfies Handle,
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
      group: "State",
      title: "React Hook Form",
      description: "React Hook Form tries to avoid rerendering. Typing in the input field does not trigger a rerender.",
    } satisfies Handle,
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
      group: "Flux",
      title: "Redux",
      description:
        "Updating the Redux store triggers a rerender of components that use the store. Child components will rerender even though they don't use the store.",
    } satisfies Handle,
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
      group: "Flux",
      title: "Redux with distributed state",
      description:
        "Updating the Redux store triggers a rerender of components that use the store. Create separate components to limit the amount of rerendering.",
    } satisfies Handle,
  },
  {
    path: "/14-css",
    element: (
      <>
        <CssLesson />
        <Code>{CssLessonCode}</Code>
      </>
    ),
    handle: {
      group: "CSS",
      title: "CSS Toggle",
      description: (
        <>
          State is used to control the <code>aria-expanded</code> attribute on the button for accessibility reasons, but
          the visibility is controlled by CSS.
        </>
      ),
    } satisfies Handle,
  },
  {
    path: "/15-css-only",
    element: (
      <>
        <CssOnlyLesson />
        <Code>{CssOnlyLessonCode}</Code>
      </>
    ),
    handle: {
      group: "CSS",
      title: "CSS Only",
      description:
        "Even if a component should respond to user interaction, it's not always necessary to use state to achieve that. Tab through the elements on this page, and a link to the home page will appear.",
    } satisfies Handle,
  },
  {
    path: "/16-react-query",
    element: (
      <>
        <ReactQuery />
        <Code>{ReactQueryCode}</Code>
      </>
    ),
    handle: {
      group: "Fetch",
      title: "React Query",
      description: "With React Query, you can cache API responses, handle updates, loading status and errors easily.",
    } satisfies Handle,
  },
  {
    path: "/17-redux-async-thunk",
    element: (
      <>
        <ReduxAsyncThunkLesson />
        <Code>{ReduxAsyncThunkLessonCode}</Code>
      </>
    ),
    handle: {
      group: "Fetch",
      title: "Redux Async Thunk",
      description: (
        <>
          An <em>async thunk action</em> can update state several times, which can lead to multiple renders depending on
          where you use the state.
        </>
      ),
    } satisfies Handle,
  },
  {
    path: "/18-redux-async-thunk-distributed",
    element: (
      <>
        <ReduxAsyncThunkDistributedLesson />
        <Code>{ReduxAsyncThunkDistributedLessonCode}</Code>
      </>
    ),
    handle: {
      group: "Fetch",
      title: "Redux Async Thunk distributed",
      description:
        "By moving dispatch and selectors down in the component tree, rerendering is limited to components that use the state.",
    } satisfies Handle,
  },
  {
    path: "/19-props",
    element: (
      <>
        <PropsLesson />
        <Code>{PropsLessonCode}</Code>
      </>
    ),
    handle: {
      group: "Props",
      title: "Props and state",
      description:
        "The child components will rerender even if their props do not change, because the parent state changes.",
    } satisfies Handle,
  },
  {
    path: "/20-memo",
    element: (
      <>
        <MemoLesson />
        <Code>{MemoLessonCode}</Code>
      </>
    ),
    handle: {
      group: "Props",
      title: "React.memo",
      description: (
        <>
          Using <code>React.memo</code> prevents rerendering when props do not change.
        </>
      ),
    } satisfies Handle,
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
