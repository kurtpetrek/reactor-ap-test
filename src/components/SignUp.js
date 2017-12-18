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
      user_token: ""
    };
  }

  handleSignUp = e => {
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
    const { finished, error } = this.state;
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
              image={icUsername}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <EntryInput
              required
              type="email"
              name="email"
              placeholder="Email"
              image={icEmail}
            />
          </FadeIn>
          <FadeIn delay={200}>
            <EntryInput
              required
              type="password"
              name="password"
              placeholder="Password"
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
