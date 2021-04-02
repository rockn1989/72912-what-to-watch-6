import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {NameSpace} from '../../store/root-reducer';
import AddReviewForm from './add-review-form';

const mockStore = configureStore({});

describe(`Addreview form`, () => {

  it(`AddReviewForm should render correctly`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: false,
        userInfo: {
          avatarUrl: `img/avatar.jpg`
        },
      },
      [NameSpace.FORM_STATUS]: {
        formStatus: true
      },
      [NameSpace.ERROR_STATUS]: {
        error: false
      }
    });

    const history = createMemoryHistory();
    history.push(`/films/2/review`);

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Route path={`/films/2/review`}>
              <AddReviewForm
                onSendUserCommentHandler={jest.fn()}
                id={2}
                formStatus
                error
              />
            </Route>
          </Router>
        </redux.Provider>

    );

    expect(container).toMatchSnapshot();
  });

  it(`AddReviewForm must show error`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: false,
        userInfo: {
          avatarUrl: `img/avatar.jpg`
        },
      },
      [NameSpace.FORM_STATUS]: {
        formStatus: true
      },
      [NameSpace.ERROR_STATUS]: {
        error: false
      }
    });

    const history = createMemoryHistory();
    history.push(`/films/2/review`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Route path={`/films/2/review`}>
              <AddReviewForm
                onSendUserCommentHandler={jest.fn()}
                id={2}
                formStatus
                error={true}
              />
            </Route>
          </Router>
        </redux.Provider>

    );

    expect(screen.getByText(/Что-то пошло не так. Попробуйте отправить сообщение позже/i)).toBeInTheDocument();
  });

});

