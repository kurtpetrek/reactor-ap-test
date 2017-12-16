import styled from "styled-components";

export default styled.button`
  width: 100%;
  border-radius: 30px;
  background: ${p => p.theme.red};
  color: ${p => p.theme.white};
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
    background: ${p => p.theme.darkBlue};
    transform: scale(1.05);
  }

  &:focus {
    transform: scale(1.05);
    outline: none;
  }
`;
