import React, {useEffect, useRef} from 'react';
import propTypes from "prop-types";

const VideoPlayer = (props) => {
  const {posterImage, previewVideo, isActive} = props;
  const video = useRef(null);

  let timerId = null;

  const videoStyle = {
    width: `100%`,
    height: `100%`,
    objectFit: `cover`
  };

  useEffect(() => {
    video.current.poster = posterImage;
    video.current.src = previewVideo;

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
    <video muted style={videoStyle} ref={video}></video>
  );
};

VideoPlayer.propTypes = {
  posterImage: propTypes.string.isRequired,
  previewVideo: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired
};

export default React.memo(VideoPlayer);
