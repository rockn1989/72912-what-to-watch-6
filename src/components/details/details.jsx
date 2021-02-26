import React from 'react';
import propTypes from 'prop-types';

const Details = ({realeased, genre, director, starring, runTime}) => {

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((acter, idx) => {
              if (idx === starring.length - 1) {
                return `${acter}`;
              }
              return `${acter}, `;
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}m</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{realeased}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  realeased: propTypes.number.isRequired,
  genre: propTypes.string.isRequired,
  director: propTypes.string.isRequired,
  starring: propTypes.array.isRequired,
  runTime: propTypes.number.isRequired,
};

export default Details;
