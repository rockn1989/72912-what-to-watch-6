export const ActionType = {
  SET_ACTIVE_GENRE: `set_genre`,
  FILTER_FILMS: `filter_films`
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre
  }),
  filterFilms: () => ({
    type: ActionType.FILTER_FILMS
  })
};
