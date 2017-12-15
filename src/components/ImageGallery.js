import React from "react";
import styled from "styled-components";

import image3 from "./../images/3.png";
import image4 from "./../images/4.png";
import image5 from "./../images/5.png";
import image6 from "./../images/6.png";

const data = [
  {
    title: "East Josianefurt",
    text: "085 Daron Via",
    image: image3
  },
  {
    title: "South Cristopherport",
    text: "162 Chandler Ville",
    image: image4
  },
  {
    title: "Concepcionbury",
    text: "7643 Kylie Burgs",
    image: image5
  },
  {
    title: "Reychester",
    text: "5590 Gabe Views Apt. 044",
    image: image6
  }
];

const Container = styled.div`
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

const Figure = props => {
  const el = props;
  return (
    <figure className="image-item">
      <img src={el.image} alt={el.title + " " + el.text} />
      <figcaption>
        <h3>{el.title}</h3>
        {el.text}
      </figcaption>
    </figure>
  );
};

export default () => {
  const items = data.map(el => <Figure title={el.title} image={el.image} text={el.text} key={el.image} />);
  return (
    <Container>
      <h3>Maui By Air The Best Way Around The Island</h3>
      <div className="image-grid">{items}</div>
    </Container>
  );
};
