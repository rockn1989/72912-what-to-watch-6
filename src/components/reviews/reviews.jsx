import React from 'react';
import Review from '../review/review';
import propTypes from "prop-types";

const Reviews = ({reviews}) => {
  let col = [];
  const row = [];
  reviews.forEach((review, idx) => {

    col.push(<Review key={`${review.date}_${idx}`} {...review} />);
    if (col.length === 3) {
      row.push(col.slice(0, 3));
    }

    if (idx === reviews.length - 1) {
      row.push(col.slice(3));
    }

  });

  const post = row.map((rows, idx) => {
    return (
      <div key={`${rows}_${idx}`} className="movie-card__reviews-col">
        {rows.map((colms) => {
          return colms;
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
