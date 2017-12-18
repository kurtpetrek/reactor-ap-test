import React, { Component } from "react";
import axios from "axios";

import ErrorText from "./styles/ErrorText";
import EntryInput from "./styles/EntryInput";
import EntryButton from "./styles/EntryButton";
import FadeIn from "./styles/FadeIn";
import Atom from "./Atom";

import icEmail from "./../images/ic-email.png";
import icPassword from "./../images/ic-password.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      error: "",
      token: "",
      email: "",
      passwordInput: false
    };
  }

  handleInput = e => {
    const el = e.target;
    this.setState(prevState => {
      const state = { ...prevState };
      state[el.name] = el.value;
      return state;
    });
  };

  handlePasswordInput = e => {
    const hasInput = e.value !== "";
    this.setState(prevState => {
      const state = { ...prevState };
      state.passwordInput = hasInput;
      return state;
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const { email, passwordInput } = this.state;

    // For form validation function will stop if data does not pass
    if (!email.match(/@/)) {
      this.setState(prevState => {
        const state = { ...prevState };
        state.error = "Email is invalid.";
        return state;
      });
      return false;
    } else if (!passwordInput) {
      this.setState(prevState => {
        const state = { ...prevState };
        state.error = "A password is required.";
        return state;
      });
      return false;
    }

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
          const state = { ...prevState };
          state.loggedIn = true;
          state.error = "";
          return state;
        });
      })
      .catch(error => {
        error = error.response;
        this.setState(prevState => {
          const state = { ...prevState };
          state.error = error.data.message;
          return state;
        });
      });
  };

  render() {
    const { loggedIn, error, email } = this.state;
    if (!loggedIn) {
      return (
        <form onSubmit={this.handleLogin}>
          {error && <ErrorText>{error}</ErrorText>}
          <FadeIn>
            <EntryInput
              required
              type="email"
              name="email"
              placeholder="Email"
              image={icEmail}
              value={email}
              onChange={this.handleInput}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <EntryInput
              required
              type="password"
              name="password"
              placeholder="Password"
              image={icPassword}
              onChange={this.handlePasswordInput}
            />
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
