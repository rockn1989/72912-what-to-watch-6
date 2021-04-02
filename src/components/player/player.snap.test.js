import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {NameSpace} from '../../store/root-reducer';

import Player from './player';
import films from '../../mocks/films';
const mockStore = configureStore({});

const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: false,
    userInfo: {
      avatarUrl: `img/avatar.jpg`
    }
  },
  [NameSpace.FILM_DATA]: {
    film: films[0]
  },
  [NameSpace.FORM_STATUS]: {
    formStatus: true
  },
  [NameSpace.ERROR_STATUS]: {
    error: false
  }
});

it(`Should MyList render correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  const history = createMemoryHistory();
  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Player onLoadingFilm={jest.fn()} id={`1`}
          />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
