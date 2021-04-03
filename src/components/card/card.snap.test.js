import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Card from './card';

import films from '../../mocks/films';
const film = films[0];

describe(`Card`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it(`Should render card correctly`, () => {
    const history = createMemoryHistory();

    const {container} = render(
        <Router history={history}>
          <Card
            id={film.id}
            title={film.name}
            previewVideolink={film.videoLink}
            img={film.posterImage}
            onHoverHandler={jest.fn()}
            isActive={false}/>
        </Router>
    );

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it(`Should render card correctly if card is active`, () => {
    const history = createMemoryHistory();

    const {container} = render(
        <Router history={history}>
          <Card
            id={film.id}
            title={film.name}
            previewVideolink={film.videoLink}
            img={film.posterImage}
            onHoverHandler={jest.fn()}
            isActive={true}/>
        </Router>
    );

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
