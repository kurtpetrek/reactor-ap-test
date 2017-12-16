import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  transition: padding 300ms ease-out, background 300ms ease-out;
  z-index: 100;

  &.fixed {
    position: fixed;
    background: ${p => p.theme.darkBlue};
  }

  @media (max-width: 700px) {
    padding: 1rem 2rem;
  }

  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
  }
`;

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginHidden: props.loginHidden,
      fixed: false,
      fixNav: props.fixNav || false
    };
  }

  componentDidMount() {
    if (window.pageYOffset > 30 && this.state.fixNav) {
      this.setState(prevState => {
        const state = { ...prevState };
        state.fixed = true;
        return state;
      });
    }
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const pos = window.pageYOffset;
    if (!this.state.fixed && pos > 30) {
      this.setState(prevState => {
        const state = { ...prevState };
        state.fixed = true;
        return state;
      });
    } else if (pos <= 30) {
      this.setState(prevState => {
        const state = { ...prevState };
        state.fixed = false;
        return state;
      });
    }
  };

  render() {
    return (
      <NavContainer className={this.state.fixed && this.state.fixNav ? "fixed" : ""}>
        <Link to="/">Reactor</Link>
        {this.state.loginHidden === true ? "" : <Link to="/login">Log In</Link>}
      </NavContainer>
    );
  }
}
