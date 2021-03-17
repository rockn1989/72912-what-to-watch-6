import React from 'react';
import propTypes from 'prop-types';

const Overview = ({film}) => {
  const {rating, scores_count: scoresCount, description, director, starring} = film;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>
          {description}
        </p>

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            Starring: {starring.map((acter, idx) => {
              if (idx === starring.length - 1) {
                return `${acter}`;
              }
              return `${acter}, `;
            })}
          </strong>
        </p>
      </div>
    </>
  );
};

Overview.propTypes = {
  film: propTypes.object.isRequired
};

export default Overview;
