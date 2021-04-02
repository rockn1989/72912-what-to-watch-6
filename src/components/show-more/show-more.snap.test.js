import React from 'react';
import {render} from '@testing-library/react';
import ShowMore from './show-more';

it(`Should Review render correctly`, () => {
  const {container} = render(<ShowMore onShowMoreClick={jest.fn()} />);
  expect(container).toMatchSnapshot();
});
