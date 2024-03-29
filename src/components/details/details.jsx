import React from 'react';
import propTypes from 'prop-types';
import {adapterFilmData} from '../../service/adapters';
import {convertTimer} from '../../service/adapters-timer';

const Details = ({film}) => {
  const {released, genre, director, starring, runTime} = adapterFilmData(film);
  const fullTime = convertTimer(runTime);

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
          <span className="movie-card__details-value">{`${fullTime.hours}h ${fullTime.minutes}m`}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  film: propTypes.object.isRequired
};

export default Details;
