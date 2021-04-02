import React from 'react';
import {render} from '@testing-library/react';
import Overview from './overview';

it(`Should PageNotFound render correctly`, () => {
  const film = {
    starring: [`Man`, `Woman`]
  };

  const {container} = render(<Overview film={film} />);
  expect(container).toMatchSnapshot();
});
