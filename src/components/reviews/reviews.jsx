import React from 'react';
import Review from '../review/review';
import propTypes from 'prop-types';

const Reviews = ({reviews}) => {

  const [...rows] = [...[reviews.slice(0, Math.ceil(reviews.length / 2))], ...[reviews.slice(Math.ceil(reviews.length / 2))]];

  const post = rows.map((columns, idx) => {
    return (
      <div key={`${columns}_${idx}`} className="movie-card__reviews-col">
        {columns.map((review) => {
          return <Review key={`${review.date}_${idx}`} {...review} />;
        })}
      </div>
    );
  });

  return (
    <div className="movie-card__reviews movie-card__row">
      {post}
    </div>
  );
};

Reviews.propTypes = {
  reviews: propTypes.array.isRequired,
};

export default Reviews;
