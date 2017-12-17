import React from "react";
import styled from "styled-components";

let time = "2";
let timeValue = "s";
let size = "50";
let sizeValue = "px";

const Container = styled.div`
  ${props => {
    time = props.time || time;
    size = props.size || size;
  }} animation: AtomSpin ${time * 2 + timeValue} infinite linear;

  width: ${size + sizeValue};
  margin: 3rem auto;

  @keyframes AtomSpin {
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
    background: ${p => p.theme.red};
    background: radial-gradient(
      circle at center,
      lighten(${p => p.theme.red}, 20%),
      ${p => p.theme.red}
    );

    &__orbit {
      width: ${size / 3 + sizeValue};
      height: ${size / 3 + sizeValue};
      background: ${props => props.theme.darkBlue};
      background: radial-gradient(
        circle at center,
        lighten(${props => props.theme.darkBlue}, 7%),
        ${props => props.theme.darkBlue}
      );
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      animation: AtomOrbit ${time + timeValue} infinite linear;
    }

    &__orbit--2 {
      animation: AtomOrbit-2 ${time + timeValue} infinite linear
        ${time * -0.25 + timeValue};
      left: 50%;
    }

    &__orbit--rev {
      animation: AtomOrbit ${time + timeValue} infinite linear
        ${time * -0.5 + timeValue};
      left: 50%;
    }

    &__orbit--2rev {
      animation: AtomOrbit-2 ${time + timeValue} infinite linear
        ${time * -0.75 + timeValue};
      left: 50%;
    }
  }

  @keyframes AtomOrbit {
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

  @keyframes AtomOrbit-2 {
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
