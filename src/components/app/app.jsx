import React, {useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
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
import {loadFilmsList, loadFilm, login, sendLogin} from "../../store/api-actions";

const App = ({
  films,
  loadFilms,
  film,
  loadingFilm,
  checkLogin,
  authorizationStatus,
  sendLoginData,
  avatar}) => {

  useEffect(() => {
    loadFilms();
    checkLogin();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({location}) => {
          return films.length > 0 ? <Welcome filmsList={films} location={location} auth={authorizationStatus} avatar={avatar} /> : <Preloader />;
        }}>
        </Route>
        <PrivateRoute path="/login" authorizationStatus={authorizationStatus} exact component={() => <SignIn sendLogin={sendLoginData}/>}/>
        <Route path="/mylist" exact render={() => <MyList films={films} />} />
        <Route path="/films/:id" exact render={({match}) => {
          const id = match.params.id;
          return <Film loadingFilm={loadingFilm} films={films} film={film} id={id} auth={authorizationStatus} avatar={avatar} />;
        }} />
        <Route path="/films/:id/review" exact render={({match}) => {
          const id = match.params.id;
          return <AddReview films={films} id={id} />;
        }} />
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
  authorizationStatus: propTypes.bool.isRequired,
  avatar: propTypes.string.isRequired,
};

const mapStateToProps = ({films, film, authorizationStatus, userInfo}) => {
  return {
    films,
    film,
    authorizationStatus,
    avatar: userInfo.avatarUrl
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
