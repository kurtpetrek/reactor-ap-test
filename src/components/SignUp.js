import React, { Component } from "react";

import axios from "axios";

import FadeIn from "./styles/FadeIn";
import EntryInput from "./styles/EntryInput";
import EntryButton from "./styles/EntryButton";

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
          prevState.finished = true;
          prevState.error = "";
          return prevState;
        });
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
    if (this.state.finished) {
      return <h1>Please check your email for confirmation.</h1>;
    } else {
      return (
        <form onSubmit={this.handleSignUp}>
          <h3>{this.state.error ? this.state.error : ""}</h3>
          <FadeIn>
            <EntryInput required type="text" name="username" placeholder="username" image={icUsername} />
          </FadeIn>
          <FadeIn delay={100}>
            <EntryInput required type="email" name="email" placeholder="Email" image={icEmail} />
          </FadeIn>
          <FadeIn delay={200}>
            <EntryInput required type="password" name="password" placeholder="Password" image={icPassword} />
          </FadeIn>
          <FadeIn delay={300}>
            <EntryButton type="submit">Sign Up</EntryButton>
          </FadeIn>
        </form>
      );
    }
  }
}
