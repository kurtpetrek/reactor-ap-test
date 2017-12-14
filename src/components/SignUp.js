import React, { Component } from "react";
import styled from "styled-components";

import EntryInput from "./EntryInput";
import EntryButton from "./EntryButton";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <EntryInput type="text" name="username" placeholder="username" image="./images/ic-username.png" />
        <EntryInput type="email" name="email" placeholder="Email" image="./images/ic-email.png" />
        <EntryInput type="password" name="password" placeholder="Password" image="./images/ic-password.png" />
        <EntryButton>Sign Up</EntryButton>
      </form>
    );
  }
}
