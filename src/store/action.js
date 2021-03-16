export const ActionType = {
  SET_ACTIVE_GENRE: `set_genre`,
  FILTER_FILMS: `filter_films`,
  SHOW_MORE: `show_more`,
  SET_FILMS_COUNTER: `set_films_counter`,
  RESET_FILMS_COUNTER: `reset_films_counter`,
  LOAD_FILMS: `load_films`,
  LOAD_FILM: `load_film`,
  IS_FILM_LOADED: `film_loaded`
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre
  }),
  filterFilms: () => ({
    type: ActionType.FILTER_FILMS
  }),
  showMore: () => ({
    type: ActionType.SHOW_MORE
  }),
  setFilmsCounter: (counters) => ({
    type: ActionType.SET_FILMS_COUNTER,
    payload: counters
  }),
  resetFilmsCounter: () => ({
    type: ActionType.RESET_FILMS_COUNTER
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film
  }),
  isFilmLoaded: () => ({
    type: ActionType.IS_FILM_LOADED
  })
};
