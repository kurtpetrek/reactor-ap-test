import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EnterOptions = styled.nav`
  display: flex;
  margin-bottom: 2rem;
  a,
  div {
    flex: 1;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  a.active {
    text-decoration: underline;
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
