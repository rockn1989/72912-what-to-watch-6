import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {NameSpace} from '../../store/root-reducer';

const Header = (props) => {
  const {className} = props;
  const {authorizationStatus: auth, userInfo: {avatarUrl: avatar}} = useSelector((state) => state[NameSpace.USER]);

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
};

export default React.memo(Header);
