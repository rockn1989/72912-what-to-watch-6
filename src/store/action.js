export const ActionType = {
  SET_ACTIVE_GENRE: `films/set_genre`,
  SHOW_MORE: `films/show_more`,
  SET_FILMS_COUNTER: `films/set_films_counter`,
  LOAD_FILMS: `films/load_films`,
  LOAD_FILM: `films/id/load_film`,
  AUTHORIZED: `user/authorized`,
  SET_USER_INFO: `user/set_user_info`,
  SEND_COMMENT: `user/send_comment`,
  REDIRECT_TO_ROUTE: `redirect_to_route`,
  SEND_FORM_DATA: `form/send_form_data`,
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

