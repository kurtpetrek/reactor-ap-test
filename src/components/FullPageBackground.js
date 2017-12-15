import styled, { css } from "styled-components";

export default styled.div`
  background-image: url(${props => props.background});
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
