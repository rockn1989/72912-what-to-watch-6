import {
  loadFilmsAction,
  loadFilmAction,
  getFavoriteAction,
  setFavoriteAction,
  redirectAction,
  authorizationAction,
  setUserInfoAction,
  sendFormDataAction,
  showErrorAction
} from "./action";

export const loadFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadFilmsAction(data));
    })
);

export const loadFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(loadFilmAction(data));
    })
    .catch(() => {
      dispatch(redirectAction(`/page-not-found`));
    })
);

export const getFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      dispatch(getFavoriteAction(data));
    })
);

export const setFavoriteFilm = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      dispatch(setFavoriteAction(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(authorizationAction(true));
      dispatch(setUserInfoAction(data));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(({status}) => {
      if (status === 200) {
        dispatch(authorizationAction(false));
      }
    })
);

export const sendLogin = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {
    email,
    password
  })
  .then(({data}) => {
    dispatch(setUserInfoAction(data));
    dispatch(authorizationAction(true));
    dispatch(redirectAction(`/`));
  })
  .catch(() => {
    dispatch(authorizationAction(false));
  })
);

export const sendComment = ({id, comment, rating}) => (dispatch, _getState, api) => {
  dispatch(sendFormDataAction(false));
  return api.post(`/comments/${id}`, {
    rating,
    comment
  }).then(() => {
    dispatch(sendFormDataAction(true));
    dispatch(redirectAction(`/films/${id}`));
  })
  .catch(() => {
    dispatch(showErrorAction(true));
  });
};
