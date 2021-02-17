import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

const Header = (props) => {
  const {className} = props;

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {props.children}

      <div className="user-block">
        <div className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: propTypes.string,
  children: propTypes.any
};

export default Header;
