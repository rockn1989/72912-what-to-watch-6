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

  const linkTo = React.useMemo(() => {
    return <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>;
  }, [id]);

  return (
    <article id={id} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {
          isActive
            ? <VideoPlayer isActive={isActive} posterImage={img} previewVideo={previewVideolink}/>
            : <img src={img} width="280" height="175"/>
        }
      </div>
      <h3 className="small-movie-card__title">
        {linkTo}
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

export default React.memo(Card);
