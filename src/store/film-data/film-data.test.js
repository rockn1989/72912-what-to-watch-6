import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {filmData} from './film-data';
import {loadFilmAction} from '../action';
import {ActionType} from '../action';
import {loadFilm} from '../api-actions';

const api = createAPI(() => {});

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmData(undefined, {})).toEqual({
      film: {}
    });
  });

  it(`Reducer set current film to state`, () => {
    const state = {
      film: {}
    };

    const film = {
      name: `test-1`,
      genre: `Comedy`
    };

    expect(filmData(state, loadFilmAction(film))).toEqual({
      film
    });

    const noFilmLoaded = {};

    expect(filmData(state, loadFilmAction(noFilmLoaded))).toEqual({
      film: noFilmLoaded
    });

  });
});


describe(`Async operation work corrently`, () => {
  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadFilmLoader = loadFilm(id);

    apiMock
      .onGet(`/films/${id}`)
      .reply(200, {fake: true});

    return loadFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: {fake: true},
        });
      });
  });
});
