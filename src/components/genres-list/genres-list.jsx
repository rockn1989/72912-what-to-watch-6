import React, {useEffect} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenresList = ({genre, filmsList, setGenres, getFilmsList, filterFilms}) => {

  const newGenreList = [{genre: `All genres`}, ...filmsList];

  const genresName = new Set(newGenreList.map((genreType) => genreType.genre));

  const genres = [...genresName].map((genreName, idx) => {
    const isActive = genreName === genre ? `catalog__genres-item--active` : ``;
    if (idx === 0) {
      return (
        <li key={`${genreName}_${idx}`} className={`catalog__genres-item ${isActive}`}>
          <a href="#" className="catalog__genres-link" onClick={(evt) => {
            evt.preventDefault();
            setGenres(genreName);
            getFilmsList();
          }}>
            {genreName}
          </a>
        </li>
      );
    }

    return (
      <li key={`${genreName}_${idx}`} className={`catalog__genres-item ${isActive}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          setGenres(genreName);
          filterFilms(genreName);
        }}>
          {genreName}
        </a>
      </li>
    );
  });

  useEffect(() => {
    getFilmsList();
  }, []);

  return (
    <ul className="catalog__genres-list">
      {genres}
    </ul>
  );
};

GenresList.propTypes = {
  genre: propTypes.string.isRequired,
  setGenres: propTypes.func.isRequired,
  getFilmsList: propTypes.func.isRequired,
  filterFilms: propTypes.func.isRequired,
  filmsList: propTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    genre: state.genre,
    filmsList: state.films
  };
};

const mapDispatchToProps = (dispatch) => ({
  setGenres(payload) {
    dispatch(ActionCreator.setGenres(payload));
  },
  getFilmsList() {
    dispatch(ActionCreator.getFilmsList());
  },
  filterFilms() {
    dispatch(ActionCreator.filterFilms());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
