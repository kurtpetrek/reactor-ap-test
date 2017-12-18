import React, { Component } from "react";
import axios from "axios";

import FadeIn from "./styles/FadeIn";
import EntryInput from "./styles/EntryInput";
import EntryButton from "./styles/EntryButton";
import ErrorText from "./styles/ErrorText";

import icUsername from "./../images/ic-username.png";
import icEmail from "./../images/ic-email.png";
import icPassword from "./../images/ic-password.png";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      finished: false,
      user_token: "",
      email: "",
      username: "",
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

  handleSignUp = e => {
    e.preventDefault();
    const { email, username, passwordInput } = this.state;

    //  Data validation stops function if not passed.
    if (username === "") {
      this.setState(prevState => {
        const state = { ...prevState };
        state.error = "Username is required";
        return state;
      });
      return false;
    } else if (email === "") {
      this.setState(prevState => {
        const state = { ...prevState };
        state.error = "Email is required";
        return state;
      });
      return false;
    } else if (!email.match(/@/)) {
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
      url: "http://dev3.apppartner.com/Reactors/scripts/user-signup.php",
      data: formData
    })
      .then(res => {
        this.setState(prevState => {
          const state = { ...prevState };
          state.finished = true;
          state.error = "";
          return state;
        });
      })
      .catch(error => {
        error = error.response.data.message;
        this.setState(prevState => {
          const state = { ...prevState };
          state.error = error;
          return state;
        });
      });
  };

  render() {
    const { finished, error, email, username } = this.state;
    if (finished) {
      return <ErrorText>Please check your email for confirmation.</ErrorText>;
    } else {
      return (
        <form onSubmit={this.handleSignUp}>
          {error && <ErrorText>{error}</ErrorText>}
          <FadeIn>
            <EntryInput
              required
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleInput}
              value={username}
              image={icUsername}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <EntryInput
              required
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleInput}
              value={email}
              image={icEmail}
            />
          </FadeIn>
          <FadeIn delay={200}>
            <EntryInput
              // required
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handlePasswordInput}
              image={icPassword}
            />
          </FadeIn>
          <FadeIn delay={300}>
            <EntryButton type="submit">Sign Up</EntryButton>
          </FadeIn>
        </form>
      );
    }
  }
}
