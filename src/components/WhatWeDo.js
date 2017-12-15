import React from "react";
import styled from "styled-components";

import Row from "./styles/Row";

const OffsetH2 = styled.h2`
  margin-top: 6rem;
  position: relative;
  left: 5rem;
  transition: left 200ms ease-in-out;

  @media (max-width: 1000px) {
    left: 0rem;
  }
  @media (max-width: 700px) {
    & {
      margin-top: 1rem;
    }
  }
`;
const PaddedContainer = styled.div`
  padding: 2rem 0;

  @media (max-width: 700px) {
    & {
      padding: 0rem 0;
    }
  }
`;

export default () => (
  <PaddedContainer>
    <Row>
      <OffsetH2 className="col">WHAT WE DO</OffsetH2>
      <div className="col">
        <h3>We Do</h3>
        <p>
          The quick, brown fox jumps over a lazy dog.<br />
          DJs flock by when MTV ax quiz prog.<br />
          Junk MTV quiz graced by fox whelps<br />
          Bawds jog, flick quartz, vex nymphs
        </p>
      </div>
    </Row>
  </PaddedContainer>
);
