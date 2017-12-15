import React from "react";
import styled from "styled-components";

import Row from "./styles/Row";

import image1 from "./../images/1.jpg";
import image2 from "./../images/2.jpg";

const FeatureContainer = styled.div`
  background: #f1faef;
  padding: 4rem 0;
  border-top: 1px #d8d8d8 solid;
  @media (max-width: 1000px) {
    & {
      padding: 0rem 0;
    }
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem 4.5rem 1rem 1rem;
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
      padding: 1rem;
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

export default () => (
  <FeatureContainer>
    <Row>
      <FeatureItem className="col">
        <img src={image1} alt="A chair and table" />
        <div>
          <h3>Regional Cuisine Down Home Southern Cooking</h3>
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps Bawds jog, flick quartz, vex
            nymphs
          </p>
        </div>
      </FeatureItem>
      <FeatureItem className="col">
        <img src={image2} alt="Ice cream and coffee" />
        <div>
          <h3>Pos Hardware More Options In Less Space</h3>
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps Bawds jog, flick quartz, vex
            nymphs
          </p>
        </div>
      </FeatureItem>
    </Row>
  </FeatureContainer>
);
