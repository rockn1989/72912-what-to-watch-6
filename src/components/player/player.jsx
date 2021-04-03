import React, {useEffect, useState, useRef} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import propTypes from 'prop-types';
import {adapterFilmData} from '../../service/adapters';
import {adaptersTimer} from '../../service/adapters-timer';
import {NameSpace} from '../../store/root-reducer';
import {AppRoute} from '../../const';
import Preloader from '../preloader/preloader';

const Player = ({onLoadingFilm}) => {
  const {film} = useSelector((state) => state[NameSpace.FILM_DATA]);
  const history = useHistory();
  const {id} = useParams();
  const videoRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    onLoadingFilm(id);
  }, [id]);

  const onTogglePlayHandler = () => {
    setIsPlay(!isPlay);

    if (isPlay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const onToggleFullScreenModeHandler = () => {
    videoRef.current.requestFullscreen();
  };

  const onCheckTimeHandler = () => {
    setDuration(videoRef.current.duration);
    setCurrentTime(videoRef.current.currentTime);

    setProgress(parseInt((videoRef.current.currentTime / videoRef.current.duration) * 100, 10).toFixed(2));
  };

  const onExitHandler = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();

    if (history.length > 0 && history.length !== 2) {
      history.goBack();
      return;
    }

    history.push(AppRoute.MAIN);
  };

  if (Object.keys(film).length === 0) {
    return <Preloader/>;
  }

  const {name, backgroundImage, videoLink} = adapterFilmData(film);

  return (
    <div className="player">
      <video
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        ref={videoRef}
        onTimeUpdate={onCheckTimeHandler}
      ></video>

      <button type="button" className="player__exit" onClick={onExitHandler}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress}
              max="100"
            ></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{adaptersTimer((duration - currentTime))}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onTogglePlayHandler}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlay ? `#pause` : `#play-s`}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={onToggleFullScreenModeHandler}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  onLoadingFilm: propTypes.func.isRequired
};

export default Player;
