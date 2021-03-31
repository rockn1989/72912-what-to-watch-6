import React from 'react';
import propTypes from 'prop-types';

const ShowMore = ({onShowMoreClick}) => {
  return (
    <button className="catalog__button" type="button" onClick={onShowMoreClick}>
      Show more
    </button>
  );
};

ShowMore.propTypes = {
  onShowMoreClick: propTypes.func.isRequired
};

export default ShowMore;
