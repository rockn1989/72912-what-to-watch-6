import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {MAX_FILMS} from '../../const';

export const getFilms = (state) => state[NameSpace.FILMS_DATA].films;
export const getFilm = (state) => state[NameSpace.FILMS_DATA].film;
export const getFilmsCounter = (state) => state[NameSpace.FILMS_DATA].filmsCounter;
export const getFilmGenre = (state) => state[NameSpace.FILMS_DATA].genre;

export const getCurrentCounter = createSelector(
    getFilmGenre,
    getFilmsCounter,
    (genre, counter) => {
      return counter.find((film) => film.name === genre) || {counter: 0};
    }
);

export const getFiltredFilms = createSelector(
    getFilmGenre,
    getFilms,
    (genre, films) => {
      return genre === `All genres` ? films : films.filter((film) => film.genre === genre);
    }
);

export const getFiltredFilmsByCounter = createSelector(
    getFiltredFilms,
    getCurrentCounter,
    (films, {counter}) => {
      return films.slice(0, (counter + 1) * MAX_FILMS);
    }
);
