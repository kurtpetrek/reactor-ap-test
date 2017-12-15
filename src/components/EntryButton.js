import styled from "styled-components";

export default styled.button`
  width: 100%;
  border-radius: 30px;
  background: #e43c4b;
  color: #fff;
  text-align: center;
  height: 3rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-top: 2rem;
  font-size: 1.1rem;
  line-height: 3rem;
  transition: 0.25s;

  &:hover {
    background: rgb(30, 54, 86);
    transform: scale(1.05);
  }

  &:focus {
    transform: scale(1.05);
    outline: none;
  }
`;
