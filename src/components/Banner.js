import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  position: relative;
  overflow: hidden;

  nav {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;

    a {
      color: white;
      text-decoration: none;
    }
  }

  h1 {
    position: absolute;
    width: 100%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    margin: 0;
  }

  img {
    width: 100%;
    display: block;
  }
  @media (max-width: 700px) {
    img {
      height: 317px;
      width: auto;
      position: relative;
      transform: translate(-50%, 0%);
      top: 50%;
      left: 50%;
    }
  }
`;

export default () => {
  return (
    <Container>
      <img src="./images/banner.png" alt="Brooklyn and Manhattan Bridges." />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
      </nav>
      <h1>Hello, welcome to Reactor</h1>
    </Container>
  );
};
