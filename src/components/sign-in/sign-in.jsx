import React, {useRef} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {NameSpace} from '../../store/root-reducer';
import {useSelector, useDispatch} from 'react-redux';
import {sendLogin} from "../../store/api-actions";

const SignIn = () => {
  const dispatch = useDispatch();
  const sendForm = useRef(null);
  const {authorizationStatus: auth} = useSelector((state) => state[NameSpace.USER]);

  const sendLoginData = (evt) => {
    evt.preventDefault();
    const userData = {};
    userData.email = sendForm.current[`user-email`].value;
    userData.password = sendForm.current[`user-password`].value;

    dispatch(sendLogin(userData));
  };

  if (auth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form ref={sendForm} action="#" className="sign-in__form" onSubmit={sendLoginData}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};


export default SignIn;
