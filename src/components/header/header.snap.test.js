import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import Header from './header';
import {NameSpace} from '../../store/root-reducer';
import * as redux from 'react-redux';
const mockStore = configureStore({});

it(`Should Header render correctly`, () => {
  jest.spyOn(redux, `useSelector`);

  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: true,
      userInfo: {
        avatarUrl: `img/avatar.jpg`
      }
    }
  });

  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Header addClassName={`movie-card__head`}/>
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
