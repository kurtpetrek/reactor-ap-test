import styled from "styled-components";

export default styled.p`
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  overflow: hidden;
  animation: ErrorTextGrow 0.3s ease-in-out;
  text-align: center;

  @keyframes ErrorTextGrow {
    0% {
      max-height: 0px;
    }
    25% {
      transform: rotate(10deg);
    }
    75% {
      transform: rotate(-10deg);
    }
    100% {
      max-height: 400px;
    }
  }
`;
