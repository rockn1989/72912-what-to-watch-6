import React from "react";
import {Link} from 'react-router-dom';
import propTypes from "prop-types";

const Card = ({id, img, title, onHoverHandler}) => {

  const onCardHoverHandler = (evt) => {
    onHoverHandler(evt.currentTarget.id);
  };

  return (
    <article id={id} onMouseEnter={onCardHoverHandler} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={img}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

Card.propTypes = {
  id: propTypes.number.isRequired,
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  onHoverHandler: propTypes.func
};

export default Card;
