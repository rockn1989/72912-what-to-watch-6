import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {NameSpace} from '../../store/root-reducer';
import Welcome from './main';
import films from '../../mocks/films';
import {NO_AUTH} from '../../const';

const mockStore = configureStore({});

it(`Main render is correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: NO_AUTH,
      userInfo: {
        avatarUrl: `img/avatar.jpg`
      },
    }
  });

  const mockGeresList = new Set([`All genres`, `Comedy`]);

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Welcome
            filtredFilms={films}
            showMore={jest.fn()}
            setFilmsCounter={jest.fn()}
            setGenre={jest.fn()}
            promo={{}}
            currentCounter={{}}
            genresList={mockGeresList}
            genre={`All genres`}
          />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  expect(screen.getByText(/All genres/i)).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});

