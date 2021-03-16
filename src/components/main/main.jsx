import React, {useEffect} from "react";
import CardList from "../card-list/card-list";
import propTypes from "prop-types";
import {useHistory} from "react-router-dom";
import Header from '../header/header';
import GenresList from "../genres-list/genres-list";
import ShowMore from '../show-more/show-more';
import {MAX_FILMS} from '../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const Welcome = ({
  location,
  genre,
  filmsList,
  setGenre,
  filterFilms,
  filtredFilms,
  showMore,
  filmsCounter,
  setFilmsCounter,
  resetFilmsCounter
}) => {
  const history = useHistory();

  let newGenreList = [];
  let genresName = [];
  let currentGenre = [];

  if (filmsList.length !== 0) {
    newGenreList = [{genre: `All genres`}, ...filmsList];

    genresName = new Set(newGenreList.map((genreType) => genreType.genre));

    if (filmsCounter.length === 0) {
      setFilmsCounter(genresName);
    }

    currentGenre = filmsCounter.filter(({name}) => name === genre).reduce((acc, item) => {
      acc[item] = item;
      return item;
    }, {});
  }

  useEffect(() => {
    resetFilmsCounter();
  }, [location]);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">Test name</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Test name</span>
                <span className="movie-card__year">Test name</span>
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

          <GenresList genre={genre} filmsList={filmsList} setGenre={setGenre} filterFilms={filterFilms} genresName={genresName}/>

          <div className="catalog__movies-list">
            <CardList filmsList={filtredFilms} currentGenre={currentGenre} />
          </div>

          <div className="catalog__more">
            { ((filtredFilms.length - (MAX_FILMS * currentGenre.counter)) - MAX_FILMS) > 0 && <ShowMore showMore={showMore} />}
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
  location: propTypes.object.isRequired,
  filtredFilms: propTypes.arrayOf(propTypes.object).isRequired,
  genre: propTypes.string.isRequired,
  filmsList: propTypes.array.isRequired,
  setGenre: propTypes.func.isRequired,
  filterFilms: propTypes.func.isRequired,
  showMore: propTypes.func.isRequired,
  resetFilmsCounter: propTypes.func.isRequired,
  setFilmsCounter: propTypes.func.isRequired,
  filmsCounter: propTypes.array.isRequired,
};


const mapStateToProps = (state) => {
  return {
    genre: state.genre,
    filtredFilms: state.filtredFilmsList,
    filmsCounter: state.filmsCounter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setGenre(payload) {
    dispatch(ActionCreator.setGenre(payload));
  },
  filterFilms() {
    dispatch(ActionCreator.filterFilms());
  },
  showMore() {
    dispatch(ActionCreator.showMore());
  },
  setFilmsCounter(payload) {
    dispatch(ActionCreator.setFilmsCounter(payload));
  },
  resetFilmsCounter() {
    dispatch(ActionCreator.resetFilmsCounter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
