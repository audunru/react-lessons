import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

export const Container: React.FC<PropsWithChildren> = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px auto",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <NavLink to="/">{"Home"}</NavLink>
        <NavLink to="/1-RendersOnce">{"RendersOnce"}</NavLink>
        <NavLink to="/2-UseEffect">{"UseEffect"}</NavLink>
        <NavLink to="/3-SetState">{"SetState"}</NavLink>
        <NavLink to="/4-SetStateChild">{"SetStateChild"}</NavLink>
        <NavLink to="/5-SetStateChildren">{"SetStateChildren"}</NavLink>
        <NavLink to="/6-Fetch">{"Fetch"}</NavLink>
        <NavLink to="/7-ReactRouterLoader">{"ReactRouterLoader"}</NavLink>
        <NavLink to="/8-ReactContext">{"ReactContext"}</NavLink>
        <NavLink to="/9-ReactContextLocal">{"ReactContextLocal"}</NavLink>
        <NavLink to="/10-Form">{"Form"}</NavLink>
        <NavLink to="/11-ReactHookForm">{"ReactHookForm"}</NavLink>
        <NavLink to="/12-Redux">{"Redux"}</NavLink>
        <NavLink to="/13-ReduxLocal">{"ReduxLocal"}</NavLink>
      </nav>
      <div>{props.children}</div>
    </div>
  );
};
