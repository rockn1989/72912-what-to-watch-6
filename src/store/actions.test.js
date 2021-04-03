import {
  ActionType,
  setGenreAction,
  loadFilmsAction,
  loadFilmAction,
  getFavoriteAction,
  showMoreAction,
  setFilmsCounterAction,
  authorizationAction,
  setUserInfoAction,
  redirectAction,
  sendUserCommentAction,
  sendFormDataAction,
  showErrorAction
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for set active genre returs correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: `genre`
    };

    expect(setGenreAction(`genre`)).toEqual(expectedAction);
  });

  it(`Action creator for load all films returs correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: [
        {
          name: `test-1`,
          genre: `Drama`
        },
        {
          name: `test-2`,
          genre: `Comedy`
        }
      ]
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

    expect(loadFilmsAction(films)).toEqual(expectedAction);
  });

  it(`Action creator for load favorites films returs correct action`, () => {
    const expectedAction = {
      type: ActionType.GET_FAVORITES,
      payload: [
        {
          name: `test-1`,
          genre: `Drama`
        },
        {
          name: `test-2`,
          genre: `Comedy`
        }
      ]
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

    expect(getFavoriteAction(films)).toEqual(expectedAction);
  });

  it(`Action creator for load one film returs correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FILM,
      payload: {
        name: `test-1`,
        genre: `Drama`
      },
    };

    const film = {
      name: `test-1`,
      genre: `Drama`
    };

    expect(loadFilmAction(film)).toEqual(expectedAction);
  });

  it(`Action creator for show more films returs action with undefined`, () => {
    const expectedAction = {
      type: ActionType.SHOW_MORE
    };

    expect(showMoreAction()).toEqual(expectedAction);
  });

  it(`Action creator for set films counter returs correct counter`, () => {
    const expectedAction = {
      type: ActionType.SET_FILMS_COUNTER,
      payload: [
        {
          genre: `All genre`,
          counter: 0
        },
        {
          genre: `Drama`,
          counter: 0
        }
      ]
    };

    const counter = [
      {
        genre: `All genre`,
        counter: 0
      },
      {
        genre: `Drama`,
        counter: 0
      }
    ];

    expect(setFilmsCounterAction(counter)).toEqual(expectedAction);
  });

  it(`Action creator for set authorization status returs correct action`, () => {
    const expectedAction = {
      type: ActionType.AUTHORIZED,
      payload: true
    };

    expect(authorizationAction(true)).toEqual(expectedAction);
  });

  it(`Action creator for set user info returs correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_USER_INFO,
      payload: {
        email: `test@test.ru`,
        passwrod: 123
      }
    };

    const userData = {
      email: `test@test.ru`,
      passwrod: 123
    };

    expect(setUserInfoAction(userData)).toEqual(expectedAction);
  });

  it(`Action creator for set current url returs correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/film/1`
    };

    expect(redirectAction(`/film/1`)).toEqual(expectedAction);
  });

  it(`Action creator for set active genre returs correct action`, () => {
    const expectedAction = {
      type: ActionType.SEND_COMMENT,
      payload: {
        message: `test message`,
        rating: 8
      }
    };

    const comment = {
      message: `test message`,
      rating: 8
    };

    expect(sendUserCommentAction(comment)).toEqual(expectedAction);
  });


  it(`Action creator for check form status returs correct boolean value`, () => {
    const expectedAction = {
      type: ActionType.SEND_FORM_DATA,
      payload: true
    };

    expect(sendFormDataAction(true)).toEqual(expectedAction);
  });

  it(`Action creator for check error status returs correct boolean value`, () => {
    const expectedAction = {
      type: ActionType.SHOW_ERROR,
      payload: false
    };

    expect(showErrorAction(false)).toEqual(expectedAction);
  });
});
