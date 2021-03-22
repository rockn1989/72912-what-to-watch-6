export const ActionType = {
  SET_ACTIVE_GENRE: `set_genre`,
  FILTER_FILMS: `filter_films`,
  SHOW_MORE: `show_more`,
  SET_FILMS_COUNTER: `set_films_counter`,
  RESET_FILMS_COUNTER: `reset_films_counter`,
  LOAD_FILMS: `load_films`,
  LOAD_FILM: `load_film`,
  AUTHORIZED: `authorized`,
  SET_USER_INFO: `set_user_info`,
  REDIRECT_TO_ROUTE: `redirect_to_route`,
  SEND_COMMENT: `send_comment`,
  SEND_FORM_DATA: `send_form_data`,
  SHOW_ERROR: `show_error`
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
  authorization: (status) => ({
    type: ActionType.AUTHORIZED,
    payload: status
  }),
  setUserInfo: (data) => ({
    type: ActionType.SET_USER_INFO,
    payload: data
  }),
  redirect: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  sendUserComment: (data) => ({
    type: ActionType.SEND_COMMENT,
    payload: data
  }),
  sendFormData: (bool) => ({
    type: ActionType.SEND_FORM_DATA,
    payload: bool
  }),
  showError: (bool) => ({
    type: ActionType.SHOW_ERROR,
    payload: bool
  })
};
