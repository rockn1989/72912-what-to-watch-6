import {filmsData} from './films-data';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {
  setGenreAction,
  loadFilmsAction,
  setFilmsCounterAction,
  showMoreAction
} from '../action';

import {ActionType} from '../action';
import {loadFilmsList} from '../api-actions';

const api = createAPI(() => {});

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsData(undefined, {})).toEqual({
      genre: `All genres`,
      films: [],
      filmsCounter: []
    });
  });

  it(`Reducer set current genre to state`, () => {
    const state = {
      genre: `All genre`,
      films: [],
      filmsCounter: []
    };

    expect(filmsData(state, setGenreAction(`Comedy`))).toEqual({
      genre: `Comedy`,
      films: [],
      filmsCounter: []
    });
  });

  it(`Reducer set current films to state`, () => {
    const state = {
      genre: `All genre`,
      films: [],
      filmsCounter: []
    };

    const films = [
      {
        name: `test-1`,
        genre: `Drama`
      },
      {
        name: `test-2`,
        genre: `Comedy`
      }
    ];

    expect(filmsData(state, loadFilmsAction(films))).toEqual({
      genre: `All genre`,
      films,
      filmsCounter: []
    });

    const noFilmsLoaded = [];

    expect(filmsData(state, loadFilmsAction(noFilmsLoaded))).toEqual({
      genre: `All genre`,
      films: [],
      filmsCounter: []
    });

  });

  it(`Reducer set current counters to state`, () => {
    const state = {
      genre: `All genres`,
      films: [],
      filmsCounter: []
    };

    const counter = new Set([`All genres`, `Drama`]);

    expect(filmsData(state, setFilmsCounterAction(counter))).toEqual({
      genre: `All genres`,
      films: [],
      filmsCounter: [
        {
          name: `All genres`,
          counter: 0
        },
        {
          name: `Drama`,
          counter: 0
        }
      ]
    });
  });

  it(`Reducer set current counters to state when click to button show more`, () => {
    const state = {
      genre: `All genres`,
      films: [],
      filmsCounter: [
        {
          name: `All genres`,
          counter: 0
        },
        {
          name: `Drama`,
          counter: 0
        }
      ]
    };

    expect(filmsData(state, showMoreAction())).toEqual({
      genre: `All genres`,
      films: [],
      filmsCounter: [
        {
          name: `All genres`,
          counter: 1
        },
        {
          name: `Drama`,
          counter: 0
        }
      ]
    });
  });
});

describe(`Async operation work corrently`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilms = [
      {id: 1, genre: `Drama`},
      {id: 2, genre: `Comedy`}
    ];

    const loadFilmsLoader = loadFilmsList();

    apiMock
      .onGet(`/films`)
      .reply(200, fakeFilms);

    return loadFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: fakeFilms,
        });
      });
  });
});
