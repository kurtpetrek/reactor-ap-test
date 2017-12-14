import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FullPageBackground from "./../components/FullPageBackground";
import SignUp from "./../components/SignUp";
import Login from "./../components/Login";

const Brand = styled.div`
  position: absolute;
  left: 5rem;
  top: 1rem;
  a {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
  }
`;

const EnterContainer = styled.div`
  max-width: 350px;
  padding-top: 3rem;
  position: relative;
  width: 90%;
  width: 90%;
  margin: auto;
`;

const EnterOptions = styled.div`
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

export default class Enter extends Component {
  constructor(props) {
    super(props);
    let currentView = "signup";
    if (props.location.pathname.match(/login/)) {
      currentView = "login";
    }
    this.state = {
      currentView
    };
  }

  render() {
    return (
      <FullPageBackground background="./images/onboarding-bg-lg.jpg" backgroundPosition="10%" centerContent="true">
        <Brand>
          <Link to="/">Reactor</Link>
        </Brand>
        <EnterContainer>
          <EnterOptions>
            <div>
              <Link to="/signup" className={this.state.currentView === "signup" && "active"}>
                Sign Up
              </Link>
            </div>
            <div>
              <Link to="/login" className={this.state.currentView === "login" && "active"}>
                Login
              </Link>
            </div>
          </EnterOptions>
          {this.state.currentView === "signup" && <SignUp />}
          {this.state.currentView === "login" && <Login />}
        </EnterContainer>
      </FullPageBackground>
    );
  }
}
