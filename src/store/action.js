export const ActionType = {
  SET_ACTIVE_GENRE: `set_genre`,
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

export const setGenreAction = (genre) => ({
  type: ActionType.SET_ACTIVE_GENRE,
  payload: genre
});

export const loadFilmsAction = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadFilmAction = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film
});

export const showMoreAction = () => ({
  type: ActionType.SHOW_MORE
});

export const setFilmsCounterAction = (counters) => ({
  type: ActionType.SET_FILMS_COUNTER,
  payload: counters
});

export const resetFilmsCounterAction = () => ({
  type: ActionType.RESET_FILMS_COUNTER
});

export const authorizationAction = (status) => ({
  type: ActionType.AUTHORIZED,
  payload: status
});

export const setUserInfoAction = (data) => ({
  type: ActionType.SET_USER_INFO,
  payload: data
});

export const redirectAction = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const sendUserCommentAction = (data) => ({
  type: ActionType.SEND_COMMENT,
  payload: data
});

export const sendFormDataAction = (bool) => ({
  type: ActionType.SEND_FORM_DATA,
  payload: bool
});

export const showErrorAction = (bool) => ({
  type: ActionType.SHOW_ERROR,
  payload: bool
});

