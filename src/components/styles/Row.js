import styled from "styled-components";

export default styled.div`
  display: flex;
  padding: 1rem 3rem;
  margin: 4rem 0;
  & > * {
    flex: 1;
  }
  @media (max-width: 700px) {
    & {
      display: block;
    }
  }
`;
