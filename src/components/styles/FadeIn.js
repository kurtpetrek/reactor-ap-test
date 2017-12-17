import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, transit } from "react-css-transition";

CSSTransition.childContextTypes = {
  //child context keys
};

const FadeIn = props => (
  <CSSTransition
    defaultStyle={{ opacity: "0" }}
    enterStyle={{ opacity: transit("1", 200, "ease-in-out") }}
    activeStyle={{ opacity: "1" }}
    transitionAppear={true}
    transitionDelay={props.delay || 0}
    active={true}
  >
    {props.children}
  </CSSTransition>
);

FadeIn.propTypes = {
  delay: PropTypes.number
};

export default FadeIn;

