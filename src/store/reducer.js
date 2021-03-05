import {ActionType} from './action';
import films from '../mocks/films';

const initialState = {
  genre: `All genres`,
  films,
  filtredFilmsList: [],
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
  }
  return state;
};

export {reducer};
