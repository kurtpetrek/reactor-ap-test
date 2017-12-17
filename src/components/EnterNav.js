import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EnterOptions = styled.nav`
  display: flex;
  margin-bottom: 2rem;

  div {
    flex: 1;
  }

  a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
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
    animation: fade-in 300ms forwards;

    @keyframes fade-in {
      0% {
        color: rgba(255, 255, 255, 0.5);
      }
      100% {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;

const EnterNav = props => (
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

EnterNav.propTypes = {
  currentView: PropTypes.string.isRequired
};

export default EnterNav;
