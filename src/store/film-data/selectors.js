import {NameSpace} from '../root-reducer';

export const getFilm = (state) => state[NameSpace.FILM_DATA].film;
