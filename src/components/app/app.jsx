import React, {useEffect} from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import browserHistory from '../../browser-history';
import propTypes from "prop-types";

import Welcome from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import PageNotFound from "../page-not-found/page-not-found";
import Preloader from '../preloader/preloader';
import PrivateRoute from '../private-route/private-route';
import {connect} from 'react-redux';
import {loadFilmsList, loadFilm, login, sendLogin, sendComment} from "../../store/api-actions";

const App = ({
  films,
  loadFilms,
  film,
  loadingFilm,
  checkLogin,
  authorizationStatus,
  sendLoginData,
  sendUserComment,
  formStatus,
  error,
  avatar}) => {

  useEffect(() => {
    loadFilms();
    checkLogin();
  }, []);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" exact render={({location}) => {
          return films.length > 0 ? <Welcome filmsList={films} location={location} auth={authorizationStatus} avatar={avatar} /> : <Preloader />;
        }}>
        </Route>

        <Route path="/login" exact render={() => {
          return <SignIn sendLogin={sendLoginData} auth={authorizationStatus}/>;
        }} />

        <Route path="/mylist" exact render={() => <MyList films={films} />} />

        <Route path="/films/:id" exact render={({match}) => {
          const id = match.params.id;
          return <Film loadingFilm={loadingFilm} films={films} film={film} id={id} auth={authorizationStatus} avatar={avatar} />;
        }} />

        <PrivateRoute path="/films/:id/review" authorizationStatus={authorizationStatus} exact component={() => <AddReview sendComment={sendUserComment} error={error} film={film} formStatus={formStatus} auth={authorizationStatus} avatar={avatar} />}/>

        <Route path="/player/:id" exact render={({match}) => {
          const id = match.params.id;
          return <Player films={films} id={id} />;
        }} />

        <Route path="*" render={() => <PageNotFound />} />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  films: propTypes.arrayOf(propTypes.object).isRequired,
  film: propTypes.object.isRequired,
  loadFilms: propTypes.func.isRequired,
  loadingFilm: propTypes.func.isRequired,
  checkLogin: propTypes.func.isRequired,
  sendLoginData: propTypes.func.isRequired,
  sendUserComment: propTypes.func.isRequired,
  authorizationStatus: propTypes.bool.isRequired,
  formStatus: propTypes.bool.isRequired,
  error: propTypes.bool.isRequired,
  avatar: propTypes.string.isRequired,
};

const mapStateToProps = ({films, film, authorizationStatus, userInfo, formStatus, error}) => {
  return {
    films,
    film,
    authorizationStatus,
    avatar: userInfo.avatarUrl,
    formStatus,
    error
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(loadFilmsList());
  },
  loadingFilm(payload) {
    dispatch(loadFilm(payload));
  },
  checkLogin() {
    dispatch(login());
  },
  sendLoginData(payload) {
    dispatch(sendLogin(payload));
  },
  sendUserComment(payload) {
    dispatch(sendComment(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
