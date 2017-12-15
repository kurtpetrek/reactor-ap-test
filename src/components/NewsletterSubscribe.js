import React, { Component } from "react";
import axios from "axios";

import styled from "styled-components";

const Container = styled.form`
  width: 550px;
  margin: 2rem auto;
  position: relative;
  text-align: center;

  input {
    width: 450px;
    padding: 0.5rem 80px 0.5rem 1rem;
    font-size: 1.2rem;
    height: 4rem;
    display: inline-block;
    border: 1px rgba(30, 54, 86, 0.15) solid;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-left: 5px #1e3656 solid;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    background: #1e3656;
    color: #fff;
    height: 4rem;
    padding: 0 3rem;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    border: 3px solid #1e3656;
    transition: 0.25s;
    &:hover,
    &:focus {
      background: #fff;
      color: #1e3656;
      outline: none;
      transform: scale(1.05);
    }
  }

  @media (max-width: 580px) {
    & {
      width: 100%;
    }
    input {
      width: 90%;
      display: block;
      margin: auto;
    }
    button {
      position: relative;
      display: block;
      margin: 1rem auto;
    }
  }
`;

export default class NewsletterSubscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      success: false,
      error: false,
      invalidEmail: false
    };
  }

  handleEmailInput = e => {
    let email = e.target.value;
    this.setState(prevState => {
      prevState.email = email;
      return prevState;
    });
  };

  handleEmailSubmit = e => {
    e.preventDefault();
    if (this.state.email.match(/@/)) {
      const formData = new FormData();
      formData.append("email", this.state.email);

      axios({
        method: "post",
        url: "http://dev3.apppartner.com/Reactors/scripts/add-email.php",
        data: formData
      })
        .then(response => {
          this.setState(prevState => {
            prevState.email = "";
            prevState.success = true;
            prevState.invalidEmail = false;
            return prevState;
          });
        })
        .catch(error => {
          this.setState(prevState => {
            prevState.invalidEmail = false;
            prevState.success = false;
            prevState.error = true;
            return prevState;
          });
        });
    } else {
      this.setState(prevState => {
        prevState.invalidEmail = true;
        prevState.success = false;
        return prevState;
      });
    }
  };

  render() {
    return (
      <Container onSubmit={this.handleEmailSubmit}>
        <input type="email" placeholder="Your email" value={this.state.email} onChange={this.handleEmailInput} />
        {this.state.error ? <p>There was an Error, please try again.</p> : ""}
        {this.state.success ? <h3>Thank you!</h3> : ""}
        {this.state.invalidEmail ? <p>Invalid Email.</p> : ""}
        <button type="submit">Subscribe</button>
      </Container>
    );
  }
}
