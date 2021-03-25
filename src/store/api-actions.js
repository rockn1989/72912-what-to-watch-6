import {loadFilmsAction, loadFilmAction, redirectAction, authorizationAction, setUserInfoAction, sendFormDataAction, showErrorAction} from "./action";

export const loadFilmsList = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadFilmsAction(data));
    });
};

export const loadFilm = (id) => (dispatch, _getState, api) => {
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(loadFilmAction(data));
    })
    .catch(() => {
      dispatch(redirectAction(`/page-not-found`));
    });
};

export const login = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(({data, status}) => {
      if (status !== 401) {
        dispatch(authorizationAction(true));
        dispatch(setUserInfoAction(data));
      }
    });
};

export const logout = () => (dispatch, _getState, api) => {
  api.get(`/logout`)
    .then(({status}) => {
      if (status === 200) {
        dispatch(authorizationAction(false));
      }
    });
};

export const sendLogin = ({email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {
    email,
    password
  }).then(({data, status}) => {
    if (status === 200) {
      dispatch(authorizationAction(true));
      dispatch(setUserInfoAction(data));
      dispatch(redirectAction(`/`));
    } else {
      dispatch(authorizationAction(false));
    }
  });
};

export const sendComment = ({id, comment, rating}) => (dispatch, _getState, api) => {
  dispatch(sendFormDataAction(false));
  api.post(`/comments/${id}`, {
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
