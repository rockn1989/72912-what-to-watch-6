import React from "react";
import propTypes from "prop-types";
import AddReviewForm from '../add-review-form/add-review-form';
import Header from '../header/header';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

const AddReview = ({films, id}) => {
  const [film] = films.filter((filmItem) => filmItem.id === parseInt(id, 10));
  const {name, posterImage, backgroundImage} = film;

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

      <AddReviewForm id={id} />
    </section>
  );
};

AddReview.propTypes = {
  films: propTypes.array,
  id: propTypes.string.isRequired
};

export default AddReview;
