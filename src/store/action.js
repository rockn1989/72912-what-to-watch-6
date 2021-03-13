export const ActionType = {
  SET_ACTIVE_GENRE: `set_genre`,
  FILTER_FILMS: `filter_films`,
  SHOW_MORE: `show_more`,
  SET_FILMS_COUNTER: `set_films_counter`,
  RESET_FILMS_COUNTER: `reset_films_counter`,
  LOAD_FILMS: `load_films`,
  LOADED: `loaded`
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
  isLoaded: () => ({
    type: ActionType.LOADED
  })
};
