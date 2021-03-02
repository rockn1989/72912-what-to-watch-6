export const ActionType = {
  SET_ACTIVE_GENRE: `set_genre`,
  GET_FILMS_LIST: `get_films_list`,
  FILTER_FILMS: `filter_films`
};

export const ActionCreator = {
  setGenres: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre
  }),
  getFilmsList: () => ({
    type: ActionType.GET_FILMS_LIST
  }),
  filterFilms: () => ({
    type: ActionType.FILTER_FILMS
  })
};
