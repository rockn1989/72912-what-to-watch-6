import React from 'react';

const preloaderStyle = {
  margin: `30px auto`,
};

const title = {
  fontSize: `24px`,
  lineHeight: `32px`,
  textAlign: `center`,
  fontWeight: `bold`
};

const Preloader = () => {
  return (
    <div style={preloaderStyle} className="preloader">
      <p style={title}>Loading...</p>
    </div>
  );
};

export default Preloader;
