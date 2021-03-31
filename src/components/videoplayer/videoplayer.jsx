import React, {useEffect, useRef} from 'react';
import propTypes from "prop-types";

const VideoPlayer = (props) => {
  const {posterImage, previewVideo, isActive} = props;
  const video = useRef();

  let timerId = null;

  const videoStyle = {
    width: `280px`,
    height: `175px`,
    objectFit: `cover`
  };

  useEffect(() => {
    timerId = setTimeout(() => {
      if (isActive) {
        video.current.play();
      } else {
        video.current.pause();
      }
    }, 1000);

    return () => {
      video.current.currentTime = 0;
      video.current.load();
      clearInterval(timerId);
    };
  }, [isActive]);

  return (
    <video muted poster={posterImage} src={previewVideo} style={videoStyle} ref={video}></video>
  );
};

VideoPlayer.propTypes = {
  posterImage: propTypes.string.isRequired,
  previewVideo: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired
};

export default React.memo(VideoPlayer);
