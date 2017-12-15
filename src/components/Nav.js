import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  transition: padding 300ms ease-out;

  @media (max-width: 700px) {
    padding: 1rem 2rem;
  }

  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
  }
`;

export default props => {
  return (
    <Nav>
      <Link to="/">Reactor</Link>
      {props.loginHidden === true ? "" : <Link to="/login">Log In</Link>}
    </Nav>
  );
};
