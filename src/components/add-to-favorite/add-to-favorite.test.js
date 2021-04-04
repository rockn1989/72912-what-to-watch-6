import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import films from '../../mocks/films';
import AddToFavorites from './add-to-favorite';

const mockStore = configureStore({});

describe(`AddToFavorites button`, () => {

  it(`should render correctly if film is not in favorites`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: true,
        userInfo: {
          avatarUrl: `img/avatar.jpg`
        }
      },
      [NameSpace.FILMS_DATA]: {
        genre: `All genres`,
        filmsCounter: [],
        films,
        favorites: []
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

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <AddToFavorites id={1} onAddToFavorite={jest.fn()}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it(`should render correctly if film is in favorites`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: true,
        userInfo: {
          avatarUrl: `img/avatar.jpg`
        }
      },
      [NameSpace.FILMS_DATA]: {
        genre: `All genres`,
        filmsCounter: [],
        films,
        favorites: []
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

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <AddToFavorites id={0} onAddToFavorite={jest.fn()}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
