import React, { Component } from "react";
import ScrollReveal from "scrollreveal";

let children;

export default class Reveal extends Component {
  constructor(props) {
    super(props);
    children = props.children;
  }
  componentDidMount() {
    const sr = ScrollReveal({ reset: true });
    sr.reveal(".reveal", { duration: 200, opacity: 0.7, scale: 0.95 });
  }
  render() {
    return <div>{children}</div>;
  }
}
