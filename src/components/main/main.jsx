import React, {useEffect} from "react";
import CardList from "../card-list/card-list";
import propTypes from "prop-types";
import {useHistory} from "react-router-dom";
import Header from '../header/header';
import GenresList from "../genres-list/genres-list";
import ShowMore from '../show-more/show-more';
import {MAX_FILMS} from '../../const';

import {adapterFilmData} from '../../service/adapters';
import Preloader from '../preloader/preloader';

const Welcome = ({
  genre,
  genresList,
  filtredFilms,
  currentCounter,
  promo,
  setGenre,
  showMore,
  setFilmsCounter,
}) => {

  const history = useHistory();

  useEffect(() => {
    setFilmsCounter(genresList);
  }, []);

  if (filtredFilms.length === 0) {
    return <Preloader />;
  }

  const promoFilm = adapterFilmData(promo);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={promoFilm.backgroundImage}
            alt={promoFilm.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={promoFilm.posterImage}
                alt={promoFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => {
                    history.push(`/mylist`);
                  }}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genre={genre} filmsList={filtredFilms} setGenre={setGenre} genresList={genresList}/>

          <div className="catalog__movies-list">
            <CardList filmsList={filtredFilms} />
          </div>

          <div className="catalog__more">
            { (filtredFilms.length - MAX_FILMS * currentCounter.counter) >= MAX_FILMS && <ShowMore onShowMoreClick={showMore} />}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Welcome.propTypes = {
  genre: propTypes.string.isRequired,
  genresList: propTypes.object.isRequired,
  filtredFilms: propTypes.arrayOf(propTypes.object).isRequired,
  currentCounter: propTypes.object.isRequired,
  promo: propTypes.object,
  setFilmsCounter: propTypes.func.isRequired,
  setGenre: propTypes.func.isRequired,
  showMore: propTypes.func.isRequired,
};


export default Welcome;
