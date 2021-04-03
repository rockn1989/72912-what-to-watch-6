export const adaptersTimer = (time) => {
  const secondsNumber = parseInt(time, 10);
  const hours = Math.floor(secondsNumber / 3600);
  const minutes = Math.floor((secondsNumber - (hours * 3600)) / 60);
  const seconds = secondsNumber - (hours * 3600) - (minutes * 60);

  return `${hours < 10 ? `0` + hours : hours}:${minutes < 10 ? `0` + minutes : minutes}:${seconds < 10 ? `0` + seconds : seconds}`;
};
