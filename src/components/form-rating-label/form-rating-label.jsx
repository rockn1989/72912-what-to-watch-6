import React from 'react';
import propTypes from 'prop-types';

const FormRatingLabel = ({idx, handleInputCheck, formStatus}) => {
  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={`star-${idx + 1}`}
        type="radio"
        name="rating"
        value={idx + 1}
        onChange={handleInputCheck}
        disabled={!formStatus}
      />
      <label className="rating__label" htmlFor={`star-${idx + 1}`}>Rating {idx + 1}</label>
    </React.Fragment>
  );
};


FormRatingLabel.propTypes = {
  idx: propTypes.number.isRequired,
  handleInputCheck: propTypes.func.isRequired,
  formStatus: propTypes.bool.isRequired,
};

export default React.memo(FormRatingLabel);
