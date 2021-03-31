import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AddReview from './add-review';
import configureStore from 'redux-mock-store';
import {NameSpace} from '../../store/root-reducer';
import * as redux from 'react-redux';

const mockStore = configureStore({});
const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: false,
    userInfo: {
      avatarUrl: `img/avatar.jpg`
    }
  },
  [NameSpace.FILMS_DATA]: {
    genre: `All genres`,
    filmsCounter: [],
    films: []
  },
  [NameSpace.FILM_DATA]: {
    film: {id: 1, genre: `Comedy`, name: `test`}
  },
  [NameSpace.FORM_STATUS]: {
    formStatus: true
  },
  [NameSpace.ERROR_STATUS]: {
    error: false
  }
});

it(`Should AddReview render correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  const history = createMemoryHistory();
  const film = {id: 1, genre: `Comedy`, name: `test`};
  const ava = `img/avatar.jpg`;

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <AddReview
            formStatus={true}
            auth={true}
            avatar={ava}
            film={film}
            onSendUserComment={jest.fn()}
            error={false}
          />
        </Router>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
