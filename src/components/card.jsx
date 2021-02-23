import React from "react";
import {Link} from 'react-router-dom';
import propTypes from "prop-types";
import VideoPlayer from '../components/videoplayer/videoplayer';

const Card = ({id, img, previewVideolink, isActive, title, onHoverHandler}) => {

  const onMouseEnterHandler = (evt) => {
    onHoverHandler(parseInt(evt.currentTarget.id, 10));
  };


  const onMouseLeaveHandler = () => {
    onHoverHandler(null);
  };

  return (
    <article id={id} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <VideoPlayer isActive={isActive} posterImage={img} previewVideo={previewVideolink}/>
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
  previewVideolink: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired,
  onHoverHandler: propTypes.func
};

export default Card;
