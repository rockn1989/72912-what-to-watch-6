import React, {useState, useEffect} from 'react';
import propTypes from "prop-types";

const errorStyle = {
  marginTop: `10px`,
  fontSize: `14px`,
  lineHeight: `16px`,
  color: `red`
};

const AddReviewForm = ({sendComment, id, formStatus, error}) => {

  const [formData, setFormData] = useState({
    rating: 0,
    message: ``,
    isActive: false,
  });

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const CommentPost = {
      id,
      comment: formData.message,
      rating: formData.rating
    };

    sendComment(CommentPost);
  };

  const onChangeHandler = (evt) => {
    setFormData({
      ...formData,
      message: evt.target.value,
    });
  };

  const onCheckRatingHandler = (evt) => {
    setFormData({
      ...formData,
      rating: parseInt(evt.target.value, 10),
    });
  };

  useEffect(() => {
    if (formData.rating !== 0 && (formData.message.length >= 50 && formData.message.length <= 400)) {
      setFormData({
        ...formData,
        isActive: true
      });
    } else {
      setFormData({
        ...formData,
        isActive: false
      });
    }

  }, [formData.rating, formData.message]);

  const fields = new Array(10).fill(``).map((el, idx) => {
    return (
      <React.Fragment key={`form-field-${idx}`}>
        <input key={`input-star-${idx + 1}`} onChange={onCheckRatingHandler} className="rating__input" id={`star-${idx + 1}`} type="radio" name="rating" value={idx + 1} disabled={formStatus ? false : true}/>
        <label key={`label-star-${idx + 1}`} className="rating__label" htmlFor={`star-${idx + 1}`}>Rating {idx + 1}</label>
      </React.Fragment>
    );
  });

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onFormSubmit} >
        <div className="rating">
          <div className="rating__stars">
            {fields}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={onChangeHandler} disabled={formStatus ? false : true}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={formData.isActive ? false : true}>Post</button>
          </div>
        </div>
      </form>
      {error && <div style={errorStyle}>Что-то пошло не так. Попробуйте отправить сообщение позже</div>}
    </div>
  );
};

AddReviewForm.propTypes = {
  id: propTypes.number.isRequired,
  sendComment: propTypes.func.isRequired,
  formStatus: propTypes.bool.isRequired,
  error: propTypes.bool.isRequired
};


export default AddReviewForm;
