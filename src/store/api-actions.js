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
      dispatch(ActionCreator.isFilmLoaded());
    });
};
