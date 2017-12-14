import React from "react";
import styled from "styled-components";

import Banner from "./../components/Banner";
import FeatureItem from "./../components/FeatureItem";
import NewsletterSubscribe from "./../components/NewsletterSubscribe";
import Footer from "./../components/Footer";

const Row = styled.div`
  display: flex;
  padding: 1rem 3rem;
  margin: 4rem 0;
  .col {
    flex: 1;
  }
  @media (max-width: 700px) {
    & {
      display: block;
    }
  }
`;

const OffsetH2 = styled.h2`
  margin-top: 6rem;
  @media (max-width: 700px) {
    & {
      margin-top: 1rem;
    }
  }
`;

const FeatureContainer = styled.div`
  background: #f1faef;
  padding: 2rem 0;
  border-top: 1px #d8d8d8 solid;
  @media (max-width: 700px) {
    & {
      padding: 0rem 0;
    }
  }
`;

const ImageGallery = styled.div`
  padding: 2rem 3rem 3rem;
  border-bottom: 1px solid #d8d8d8;
  margin: 2rem 0;

  h3 {
    text-align: center;
  }

  .image-grid {
    display: flex;
    justify-content: space-around;

    img {
      display: block;
      width: 100%;
      margin: auto;
    }

    .image-item {
      width: 20%;
      margin: 1rem 0;
    }

    @media (max-width: 1000px) {
      & {
        flex-wrap: wrap;
        flex: 2;
      }
      .image-item {
        width: 35%;
      }
    }

    @media (max-width: 600px) {
      .image-grid {
        display: block;
      }
      .image-item {
        width: 100%;
      }
      img {
        max-width: 300px;
      }
    }
  }
`;

const SubscribeContainer = styled.div`
  padding: 3rem 0;
`;

export default () => {
  return (
    <div>
      <Banner />
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
      <FeatureContainer>
        <Row>
          <FeatureItem className="col row">
            <img src="./images/1.png" alt="" />
            <div>
              <h3>Regional Cuisine Down Home Southern Cooking</h3>
              <p>
                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps Bawds jog, flick quartz, vex
                nymphs
              </p>
            </div>
          </FeatureItem>
          <FeatureItem className="col row">
            <img src="./images/2.png" alt="" />
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
      <ImageGallery>
        <h3>Maui By Air The Best Way Around The Island</h3>
        <div className="image-grid">
          <figure className="image-item">
            <img src="./images/3.png" alt="" />
            <figcaption>
              <h3>East Josianefurt</h3>
              085 Daron Via
            </figcaption>
          </figure>
          <figure className="image-item">
            <img src="./images/4.png" alt="" />
            <figcaption>
              <h3>South Cristopherport</h3>
              162 Chandler Ville
            </figcaption>
          </figure>
          <figure className="image-item">
            <img src="./images/5.png" alt="" />
            <figcaption>
              <h3>Concepcionbury</h3>
              7643 Kylie Burgs
            </figcaption>
          </figure>
          <figure className="image-item">
            <img src="./images/6.png" alt="" />
            <figcaption>
              <h3>Reychester</h3>
              5590 Gabe Views Apt. 044
            </figcaption>
          </figure>
        </div>
      </ImageGallery>
      <SubscribeContainer>
        <h2>SUBSCRIBE TO THE NEWSLETTER</h2>
        <NewsletterSubscribe />
      </SubscribeContainer>
      <Footer />
    </div>
  );
};
