import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import BreadCrumbs from './breadcrumbs';

it(`Should Breadcrumbs render correctly`, () => {
  const history = createMemoryHistory();
  const data = {id: 1, name: `film`};
  const {container} = render(
      <Router history={history}>
        <BreadCrumbs {...data} />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
