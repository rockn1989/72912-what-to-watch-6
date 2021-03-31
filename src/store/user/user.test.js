import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {user} from './user';
import {ActionType} from '../action';
import {checkAuth, sendLogin, sendComment} from '../api-actions';

const api = createAPI(() => {});

describe(`Reducer user work corrently`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: false,
        userInfo: {
          avatarUrl: `img/avatar.jpg`
        }
      });
  });

  it(`Reducer should update authorizationStatus to 'auth'`, () => {
    const state = {
      authorizationStatus: false,
      userInfo: {
        avatarUrl: `img/avatar.jpg`
      }
    };

    const requiredAuthorizationAction = {
      type: ActionType.AUTHORIZED,
      payload: true
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: true,
        userInfo: {
          avatarUrl: `img/avatar.jpg`
        }
      });
  });

});

describe(`Asyc operation work corrently`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTHORIZED,
          payload: true
        });
      });

  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = sendLogin(fakeUser);

    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: {fake: true},
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.AUTHORIZED,
          payload: true,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/`,
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmId = 1;
    const fakeComment = {id: filmId, rating: 5, comment: `test comment`};
    const sendCommentLoader = sendComment(fakeComment);

    apiMock
      .onPost(`/comments/${filmId}`)
      .reply(200, true);

    return sendCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_FORM_DATA,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SEND_FORM_DATA,
          payload: true,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/films/${filmId}`,
        });

      });
  });

});
