import {ActionCreator} from "./action";

export const loadFilmsList = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(data));
      dispatch(ActionCreator.filterFilms());
      dispatch(ActionCreator.isLoaded());
    });
};
