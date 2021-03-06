import React from 'react';
import propTypes from 'prop-types';

const ShowMore = ({showMore}) => {
  return (
    <button className="catalog__button" type="button" onClick={showMore}>
      Show more
    </button>
  );
};

ShowMore.propTypes = {
  showMore: propTypes.func.isRequired
};

export default ShowMore;
