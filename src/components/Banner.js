import React from "react";
import styled from "styled-components";

import Nav from "./Nav";

import bannerImgLg from "./../images/banner-lg.jpg";
import bannerImgMd from "./../images/banner-md.jpg";
import bannerImgSm from "./../images/banner-sm.jpg";

const Container = styled.header`
  width: 100%;
  position: relative;
  overflow: hidden;
  max-height: 75vh;

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
      <Nav />
      <h1>Hello, welcome to Reactor</h1>
    </Container>
  );
};
