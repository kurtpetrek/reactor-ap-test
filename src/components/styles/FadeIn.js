import React from "react";
import { CSSTransition, transit } from "react-css-transition";

CSSTransition.childContextTypes = {
  //child context keys
};

export default props => (
  <CSSTransition
    defaultStyle={{ opacity: "0" }}
    enterStyle={{ opacity: transit("1", 200, "ease-in-out") }}
    activeStyle={{ opacity: "1" }}
    transitionAppear={true}
    transitionDelay={props.delay}
    active={true}
  >
    {props.children}
  </CSSTransition>
);
