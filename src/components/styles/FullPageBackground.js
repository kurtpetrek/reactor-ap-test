import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const FullPageBackground = styled.div`
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

  @media (max-width: 700px) {
    background-image: url(${props => props.backgroundImageSmall});
  }
`;

FullPageBackground.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  backgroundImageSmall: PropTypes.string,
  backgroundPosition: PropTypes.string
};

export default FullPageBackground;
