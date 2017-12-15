import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import EntryInput from "./styles/EntryInput";
import EntryButton from "./styles/EntryButton";

import icEmail from "./../images/ic-email.png";
import icPassword from "./../images/ic-password.png";

const ErrorText = styled.p`
  color: white;
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      error: "",
      token: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    const formData = new FormData();
    const form = e.target;
    for (var i = 0; i < form.elements.length; i++) {
      let el = form.elements[i];
      if (el.name && el.value) {
        formData.append(el.name, el.value);
      }
    }

    axios({
      method: "post",
      url: "http://dev3.apppartner.com/Reactors/scripts/user-login.php",
      data: formData
    })
      .then(res => {
        this.setState(prevState => {
          prevState.loggedIn = true;
          prevState.error = "";
          return prevState;
        });
        console.log(res);
      })
      .catch(error => {
        console.log(error.response);
        error = error.response;
        this.setState(prevState => {
          prevState.error = error.data.message;
          return prevState;
        });
      });
  };

  render() {
    if (!this.state.loggedIn) {
      return (
        <form onSubmit={this.handleLogin}>
          <ErrorText>{this.state.error}</ErrorText>
          <EntryInput required type="email" name="email" placeholder="Email" image={icEmail} />
          <EntryInput required type="password" name="password" placeholder="Password" image={icPassword} />
          <EntryButton type="submit">Login</EntryButton>
        </form>
      );
    } else {
      return <ErrorText>You Logged in!</ErrorText>;
    }
  }
}
