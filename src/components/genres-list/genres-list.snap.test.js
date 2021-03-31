import React from 'react';
import {render} from '@testing-library/react';
import GenresList from './genres-list';

it(`Should GenresList render correctly`, () => {
  const data = {
    genre: `Drama`,
    setGenre: () => {},
    genresList: [`Comedy`, `Drama`]
  };

  const {container} = render(<GenresList {...data}/>);
  expect(container).toMatchSnapshot();
});
