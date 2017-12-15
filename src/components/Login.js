import React, { Component } from "react";
import axios from "axios";

import Atom from "./Atom";

import ErrorText from "./styles/ErrorText";
import EntryInput from "./styles/EntryInput";
import EntryButton from "./styles/EntryButton";
import FadeIn from "./styles/FadeIn";

import icEmail from "./../images/ic-email.png";
import icPassword from "./../images/ic-password.png";

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
      })
      .catch(error => {
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
          {this.state.error ? <ErrorText>{this.state.error}</ErrorText> : ""}
          <FadeIn>
            <EntryInput required type="email" name="email" placeholder="Email" image={icEmail} />
          </FadeIn>
          <FadeIn delay={100}>
            <EntryInput required type="password" name="password" placeholder="Password" image={icPassword} />
          </FadeIn>
          <FadeIn delay={200}>
            <EntryButton type="submit">Login</EntryButton>
          </FadeIn>
        </form>
      );
    } else {
      return (
        <div>
          <ErrorText>You Logged in!</ErrorText>
          <Atom />
        </div>
      );
    }
  }
}
