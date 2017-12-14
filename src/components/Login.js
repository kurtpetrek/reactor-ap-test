import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import EntryInput from "./EntryInput";
import EntryButton from "./EntryButton";

export default class Login extends Component {
  render() {
    return (
      <form>
        <EntryInput type="text" name="username" placeholder="username" image="./images/ic-username.png" />
        <EntryInput type="password" name="password" placeholder="Password" image="./images/ic-password.png" />
        <EntryButton>Login</EntryButton>
      </form>
    );
  }
}
