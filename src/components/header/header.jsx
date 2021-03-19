import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

const Header = (props) => {
  const {className, auth, avatar} = props;

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
        {auth ?
          <div className="user-block__avatar">
            <img
              src={avatar}
              alt="User avatar"
              width="63"
              height="63"
            />
          </div> :
          <Link to="/login" className="user-block__link">Sign in</Link>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  className: propTypes.string,
  children: propTypes.any,
  auth: propTypes.bool.isRequired,
  avatar: propTypes.string.isRequired
};

export default Header;
