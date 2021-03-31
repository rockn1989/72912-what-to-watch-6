import React from 'react';
import {render} from '@testing-library/react';
import Details from './details';

it(`Should Details render correctly`, () => {
  const film = {
    released: 13,
    genre: `Comedy`,
    runTime: `13/08/1999`,
    director: `J.J. Abrams`,
    starring: [`Alena`, `Oleg`]
  };

  const {container} = render(<Details film={film}/>);
  expect(container).toMatchSnapshot();
});
