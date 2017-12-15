import React from "react";

import styled from "styled-components";

let time = "2";
let timeValue = "s";
let size = "50";
let sizeValue = "px";

const Container = styled.div`
  ${props => props.time && (time = props.time)} ${props => props.size && (size = props.size)} animation: spin ${time * 2 + timeValue} infinite linear;

  width: ${size + sizeValue};
  margin: 3rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .atom {
    position: relative;
    width: ${size + sizeValue};
    height: ${size + sizeValue};
    border-radius: 50%;
    background: #e43c4b;
    background: radial-gradient(circle at center, lighten(#e43c4b, 20%), #e43c4b);

    &__orbit {
      width: ${size / 3 + sizeValue};
      height: ${size / 3 + sizeValue};
      background: #1e3656;
      background: radial-gradient(circle at center, lighten(#1e3656, 7%), #1e3656);
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      animation: orbit ${time + timeValue} infinite linear;
    }

    &__orbit--2 {
      animation: orbit-2 ${time + timeValue} infinite linear ${time * -0.25 + timeValue};
      left: 50%;
    }

    &__orbit--rev {
      animation: orbit ${time + timeValue} infinite linear ${time * -0.5 + timeValue};
      left: 50%;
    }

    &__orbit--2rev {
      animation: orbit-2 ${time + timeValue} infinite linear ${time * -0.75 + timeValue};
      left: 50%;
    }
  }

  @keyframes orbit {
    0% {
      transform: translate(-350%, -50%) scale(1);
      z-index: 1;
    }
    25% {
      transform: translate(-50%, -50%) scale(1.5);
      z-index: 1;
      filter: brightness(1.5);
    }
    50% {
      transform: translate(250%, -50%) scale(1);
      z-index: -1;
    }
    75% {
      transform: translate(-50%, -50%) scale(0.5);
      z-index: -1;
      filter: brightness(0.5);
    }
    100% {
      transform: translate(-350%, -50%) scale(1);
      z-index: -1;
    }
  }

  @keyframes orbit-2 {
    0% {
      transform: translate(-50%, -350%) scale(1);
      z-index: 1;
    }
    25% {
      transform: translate(-50%, -50%) scale(1.5);
      z-index: 1;
      filter: brightness(1.5);
    }
    50% {
      transform: translate(-50%, 250%) scale(1);
      z-index: -1;
    }
    75% {
      transform: translate(-50%, -50%) scale(0.5);
      z-index: -1;
      filter: brightness(0.7);
    }
    100% {
      transform: translate(-50%, -350%) scale(1);
      z-index: -1;
    }
  }
`;

export default () => (
  <Container>
    <div className="atom">
      <div className="atom__orbit" />
      <div className="atom__orbit atom__orbit--2" />
      <div className="atom__orbit atom__orbit--rev" />
      <div className="atom__orbit atom__orbit--2rev" />
    </div>
  </Container>
);
