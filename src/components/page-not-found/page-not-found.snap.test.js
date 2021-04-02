import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PageNotFound from './page-not-found';

it(`Should PageNotFound render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <PageNotFound />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
