import React from "react";
import { Link } from "react-router-dom";

import bannerImgLg from "./../images/banner-lg.jpg";
import bannerImgMd from "./../images/banner-md.jpg";
import bannerImgSm from "./../images/banner-sm.jpg";

import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  position: relative;
  overflow: hidden;
  max-height: 75vh;

  nav {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    transition: padding 300ms ease-out;

    a {
      font-size: 1.5rem;
      color: white;
      text-decoration: none;
    }
  }
  @media (max-width: 700px) {
    nav {
      padding: 1rem 2rem;
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
  const bannerSrcSet = `
    ${bannerImgLg} 2000w,
    ${bannerImgMd} 1000w,
    ${bannerImgSm} 500w
  `;

  return (
    <Container>
      <img src={bannerImgLg} srcSet={bannerSrcSet} alt="Brooklyn and Manhattan Bridges." />
      <nav>
        <Link to="/">Reactor</Link>
        <Link to="/login">Log In</Link>
      </nav>
      <h1>Hello, welcome to Reactor</h1>
    </Container>
  );
};
