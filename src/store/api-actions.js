import {ActionCreator} from "./action";

export const loadFilmsList = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(data));
      dispatch(ActionCreator.filterFilms());
    });
};

export const loadFilm = (id) => (dispatch, _getState, api) => {
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilm(data));
    });
};

export const login = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(({data, status}) => {
      if (status !== 401) {
        dispatch(ActionCreator.authorization(true));
        dispatch(ActionCreator.setUserInfo(data));
      }
    });
};

export const logout = () => (dispatch, _getState, api) => {
  api.get(`/logout`)
    .then(({status}) => {
      if (status === 200) {
        dispatch(ActionCreator.authorization(false));
      }
    });
};

export const sendLogin = ({email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {
    email,
    password
  }).then(({data, status}) => {
    if (status === 200) {
      dispatch(ActionCreator.authorization(true));
      dispatch(ActionCreator.setUserInfo(data));
    } else {
      dispatch(ActionCreator.authorization(false));
    }
  });
};
