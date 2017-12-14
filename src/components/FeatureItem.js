import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  img {
    width: 40%;
    margin-right: 2rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
  h3 {
    margin-top: 0;
  }

  @media (max-width: 1000px) {
    & {
      display: block;
    }
    img {
      display: block;
      width: 60%;
      margin: 0 auto 2rem;
    }
  }
  @media (max-width: 500px) {
    & {
      padding: 0;
      margin-bottom: 2rem;
    }
    img {
      width: 100%;
    }
  }
`;
