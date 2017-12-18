import React, { Component } from "react";
import axios from "axios";

import styled from "styled-components";

const SubscribeContainer = styled.div`
  padding: 3rem 0;
`;

const Container = styled.form`
  width: 550px;
  margin: 2rem auto;
  position: relative;
  text-align: center;

  input {
    width: 450px;
    padding: 0.5rem 130px 0.5rem 1rem;
    font-size: 1.2rem;
    height: 4rem;
    display: inline-block;
    border: 1px rgba(30, 54, 86, 0.15) solid;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-left: 5px ${p => p.theme.darkBlue} solid;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    background: ${p => p.theme.darkBlue};
    color: ${p => p.theme.white};
    height: 4rem;
    padding: 0 3rem;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    border: 3px solid ${p => p.theme.darkBlue};
    transition: 0.25s;
    &:hover,
    &:focus {
      background: ${p => p.theme.white};
      color: ${p => p.theme.darkBlue};
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
      const state = { ...prevState };
      state.email = email;
      return state;
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
            const state = { ...prevState };
            state.email = "";
            state.success = true;
            state.invalidEmail = false;
            return state;
          });
        })
        .catch(error => {
          this.setState(prevState => {
            const state = { ...prevState };
            state.invalidEmail = false;
            state.success = false;
            state.error = true;
            return state;
          });
        });
    } else {
      this.setState(prevState => {
        const state = { ...prevState };
        prevState.invalidEmail = true;
        prevState.success = false;
        return state;
      });
    }
  };

  render() {
    const { email, error, success, invalidEmail } = this.state;
    return (
      <SubscribeContainer>
        <h2>SUBSCRIBE TO THE NEWSLETTER</h2>
        <Container onSubmit={this.handleEmailSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={this.handleEmailInput}
          />
          {error && <p>There was an Error, please try again.</p>}
          {success && <h3>Thank you!</h3>}
          {invalidEmail && <p>Invalid Email.</p>}
          <button type="submit">Subscribe</button>
        </Container>
      </SubscribeContainer>
    );
  }
}
