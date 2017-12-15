import styled from "styled-components";

export default styled.input`
  display: block;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  padding: 0.5rem 1rem 0.5rem 3rem;
  color: #fff;
  border: 3px solid transparent;
  background-color: rgba(30, 54, 86, 0.15);
  margin: 1.5rem 0;
  border-radius: 30px;
  background-image: ${props => props.image && "url(" + props.image + ")"};
  background-size: 1.6rem;
  background-repeat: no-repeat;
  background-position: 3%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border: #fff solid 3px;
    outline: none;
  }
`;
