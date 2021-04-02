import React from 'react';
import {render} from '@testing-library/react';
import Preloader from './preloader';

it(`Should Preloader render correctly`, () => {
  const {container} = render(<Preloader />);
  expect(container).toMatchSnapshot();
});
