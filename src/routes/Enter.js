import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FullPageBackground from "./../components/styles/FullPageBackground";
import EnterContainer from "./../components/styles/EnterContainer";
import Nav from "./../components/Nav";
import SignUp from "./../components/SignUp";
import Login from "./../components/Login";
import EnterNav from "./../components/EnterNav";

import onboardingBG from "./../images/onboarding-bg-lg.jpg";

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
      <FullPageBackground backgroundImage={onboardingBG} backgroundColor={"#7B8792"} backgroundPosition="10%" centerContent="true">
        <Nav loginHidden={true} />
        <EnterContainer>
          <EnterNav currentView={this.state.currentView} />
          {this.state.currentView === "signup" && <SignUp />}
          {this.state.currentView === "login" && <Login />}
        </EnterContainer>
      </FullPageBackground>
    );
  }
}
