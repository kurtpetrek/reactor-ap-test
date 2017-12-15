import styled, { css } from "styled-components";

export default styled.div`
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  min-height: 100vh;
  background-size: cover;
  background-position: ${props => props.backgroundPosition || "center"};
  ${props =>
    props.centerContent &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;
