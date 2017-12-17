import React from "react";
import PropTypes from "prop-types";

const GalleryFigure = props => {
  const { image, title, text } = props;
  return (
    <figure {...props}>
      <img src={image} alt={title + " " + text} />
      <figcaption>
        <h3>{title}</h3>
        {text}
      </figcaption>
    </figure>
  );
};

GalleryFigure.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default GalleryFigure;
