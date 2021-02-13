import React from 'react';
import propTypes from "prop-types";

const Review = ({text, author, date, rating}) => {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateime="2016-12-24">
            {date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  text: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

export default Review;
