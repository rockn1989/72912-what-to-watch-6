import React from 'react';
import {render} from '@testing-library/react';
import {NameSpace} from '../../store/root-reducer';

import VideoPlayer from './videoplayer';
import films from '../../mocks/films';

const store = {
  [NameSpace.USER]: {
    authorizationStatus: false,
    userInfo: {
      avatarUrl: `img/avatar.jpg`
    }
  },
  [NameSpace.FILM_DATA]: {
    film: films[0]
  },
  [NameSpace.FORM_STATUS]: {
    formStatus: true
  },
  [NameSpace.ERROR_STATUS]: {
    error: false
  }
};

const videoPlayerMockData = store[NameSpace.FILM_DATA].film;

describe(`Videoplayer`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it(`Should MyList render correctly`, () => {

    const {container} = render(
        <VideoPlayer
          posterImage={videoPlayerMockData.posterImage}
          previewVideo={videoPlayerMockData.videoLink}
          isActive
        />
    );

    expect(container).toMatchSnapshot();
  });

});

