import React from 'react';
import {render} from '@testing-library/react';
import Reviews from './reviews';

import reviews from '../../mocks/reviews';

it(`Should Review render correctly`, () => {
  const {container} = render(<Reviews reviews={reviews} />);
  expect(container).toMatchSnapshot();
});
