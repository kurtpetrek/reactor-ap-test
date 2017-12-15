import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EnterOptions = styled.nav`
  display: flex;
  margin-bottom: 2rem;
  a,
  div {
    flex: 1;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: 300ms ease-in-out;
  }

  @media (max-width: 500px) {
    a,
    div {
      text-align: center;
    }
  }

  a.active {
    text-decoration: underline;
    color: rgba(255, 255, 255, 1);
  }
`;

export default props => (
  <EnterOptions>
    <div>
      <Link to="/signup" className={props.currentView === "signup" ? "active" : ""}>
        Sign Up
      </Link>
    </div>
    <div>
      <Link to="/login" className={props.currentView === "login" ? "active" : ""}>
        Login
      </Link>
    </div>
  </EnterOptions>
);
