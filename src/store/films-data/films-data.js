import {ActionType} from '../action';

const initialState = {
  genre: `All genres`,
  films: [],
  filmsCounter: [],
  favorites: []
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: [...action.payload]
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

    case ActionType.GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
  }

  return state;
};

export {filmsData};
