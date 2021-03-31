import React from 'react';
import {render} from '@testing-library/react';
import Review from './review';

it(`Should Review render correctly`, () => {
  const data = {
    text: `test`,
    date: `12/03/1999`,
    author: `Alex`,
    rating: 15
  };

  const {container} = render(<Review {...data} />);
  expect(container).toMatchSnapshot();
});
