import React from 'react';
import {render} from '@testing-library/react';
import FormRatingLabel from './form-rating-label';

it(`Should FormRatingLabel render correctly`, () => {
  const data = {
    idx: 1,
    onCheckRatingHandler: () => {},
    formStatus: true
  };

  const {container} = render(<FormRatingLabel {...data}/>);
  expect(container).toMatchSnapshot();
});
