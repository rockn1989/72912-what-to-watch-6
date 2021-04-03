import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {NameSpace} from '../../store/root-reducer';
import App from './app';

import films from '../../mocks/films';
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

describe(`Test routing`, () => {

  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);


  it(`Render Main when user navigate to '/' url`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App promo={films[0]}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  });

  it(`Render Sign-in when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getAllByText(/Sign in/i).length).toBe(2);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it(`Render My list when user navigate to '/mylist' url`, () => {
    const history = createMemoryHistory();
    history.push(`/mylist`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it(`Render detail film when user navigate to '/films/:id' url`, () => {
    const history = createMemoryHistory();
    const id = 1;
    store.dispatch = () => {};
    history.push(`/films/${id}`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render detail film review when user navigate to '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    const id = 1;
    store.dispatch = () => {};
    history.push(`/films/${id}/review`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/What to watch Ltd/i)).toBeInTheDocument();
    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  });

  it(`Render Player when user navigate to '/player/:id' url`, () => {
    const history = createMemoryHistory();
    const id = 1;
    store.dispatch = () => {};
    history.push(`/player/${id}`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Render PageNotFound when user navigate to non-existenr route`, () => {
    const history = createMemoryHistory();
    history.push(`/page-no-found`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
