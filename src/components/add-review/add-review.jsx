import React from 'react';
import propTypes from 'prop-types';
import AddReviewForm from '../add-review-form/add-review-form';
import Header from '../header/header';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import Preloader from '../preloader/preloader';
import {adapterFilmData} from '../../service/adapters';

const AddReview = ({onSendUserComment, film, formStatus, error}) => {

  const {name, posterImage, backgroundImage, id} = adapterFilmData(film);

  if (Object.keys(film).length === 0) {
    return <Preloader />;
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <BreadCrumbs id={id} name={name} />
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <AddReviewForm onSendUserCommentHandler={onSendUserComment} id={id} formStatus={formStatus} error={error} />
    </section>
  );
};

AddReview.propTypes = {
  film: propTypes.object.isRequired,
  onSendUserComment: propTypes.func.isRequired,
  formStatus: propTypes.bool.isRequired,
  error: propTypes.bool.isRequired,
};

export default AddReview;
