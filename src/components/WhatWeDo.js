import React from "react";
import styled from "styled-components";

import Row from "./Row";

const OffsetH2 = styled.h2`
  margin-top: 6rem;
  @media (max-width: 700px) {
    & {
      margin-top: 1rem;
    }
  }
`;

export default () => (
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
);
