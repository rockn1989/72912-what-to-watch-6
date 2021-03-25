import {combineReducers} from 'redux';

import {filmsData} from './films-data/films-data';
import {filmData} from './film-data/film-data';
import {user} from './user/user';
import {formStatus} from './form-status/form-status';
import {errorStatus} from './error-status/error-status';

export const NameSpace = {
  FILMS_DATA: `FILMS_DATA`,
  FILM_DATA: `FILM_DATA`,
  USER: `USER`,
  FORM_STATUS: `FORM_STATUS`,
  ERROR_STATUS: `ERROR_STATUS`
};

export default combineReducers({
  [NameSpace.FILMS_DATA]: filmsData,
  [NameSpace.FILM_DATA]: filmData,
  [NameSpace.USER]: user,
  [NameSpace.FORM_STATUS]: formStatus,
  [NameSpace.ERROR_STATUS]: errorStatus,
});

// export default combineReducers({
//   filmsData,
//   genre,
//   user,
//   formStatus,
//   errorStatus,
// });
