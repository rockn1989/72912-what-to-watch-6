import {ActionType} from './action';
import films from '../mocks/films';

const initialState = {
  genre: `All genres`,
  films,
  filtredFilmsList: [],
  filmsCounter: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.FILTER_FILMS:
      return {
        ...state,
        filtredFilmsList: state.genre === initialState.genre ? [...state.films] : state.films.filter((film) => film.genre === state.genre)
      };

    case ActionType.SHOW_MORE:
      const genreCounter = state.filmsCounter.filter(({name}) => name === state.genre);
      const idx = state.filmsCounter.indexOf(...genreCounter);

      const newEl = {
        name: state.genre,
        counter: genreCounter[0].counter + 1
      };

      const newFilmsCounter = [...state.filmsCounter.slice(0, idx), newEl, ...state.filmsCounter.slice(idx + 1)];
      return {
        ...state,
        filmsCounter: [...newFilmsCounter]
      };

    case ActionType.SET_FILMS_COUNTER:
      const counters = [];
      for (let name of action.payload) {
        counters.push({
          name,
          counter: 0
        });
      }

      return {
        ...state,
        filmsCounter: [...counters]
      };

    case ActionType.RESET_FILMS_COUNTER:
      const resetFilmsCounter = state.filmsCounter.map((counter) => {
        return {
          name: counter.name,
          counter: 0
        };
      });
      return {
        ...state,
        filmsCounter: [...resetFilmsCounter]
      };
  }
  return state;
};

export {reducer};
