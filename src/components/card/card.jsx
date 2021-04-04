import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import VideoPlayer from '../videoplayer/videoplayer';

const Card = ({id, img, previewVideolink, isActive, title, handleCardHover}) => {

  const handleOnMouseEnter = (evt) => {
    handleCardHover(parseInt(evt.currentTarget.id, 10));
  };

  const handleOnMouseLeave = () => {
    handleCardHover(null);
  };

  return (
    <article id={id} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="small-movie-card catalog__movies-card">
      <Link className="small-movie-card__link" to={`/films/${id}`}>
        <div className="small-movie-card__image">
          {
            isActive
              ? <VideoPlayer isActive={isActive} posterImage={img} previewVideo={previewVideolink}/>
              : <img src={img} width="280" height="175"/>
          }
        </div>
        <h3 className="small-movie-card__title">
          {title}
        </h3>
      </Link>
    </article>
  );
};

Card.propTypes = {
  id: propTypes.number.isRequired,
  img: propTypes.string.isRequired,
  previewVideolink: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired,
  handleCardHover: propTypes.func
};

export default React.memo(Card);
