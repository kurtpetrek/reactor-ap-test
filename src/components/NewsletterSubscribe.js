import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 550px;
  margin: 2rem auto;
  position: relative;

  input {
    width: 450px;
    padding: 0.3rem 80px 0.3rem 0.3rem;
    font-size: 1.2rem;
    height: 3rem;
    display: inline-block;
    border: 1px #1e3656 solid;

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
    height: 3rem;
    padding: 0 3rem;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    border: 3px solid #1e3656;
    transition: 0.25s;
    &:hover {
      background: #fff;
      color: #1e3656;
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

export default () => (
  <Container>
    <input type="email" placeholder="Your email" />
    <button>Subscribe</button>
  </Container>
);
