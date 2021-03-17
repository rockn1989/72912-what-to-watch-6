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
import {connect} from 'react-redux';
import {loadFilmsList, loadFilm} from "../../store/api-actions";

const App = ({films, loadFilms, film, loadingFilm}) => {

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({location}) => {
          return films.length > 0 ? <Welcome filmsList={films} location={location} /> : <Preloader />;
        }}>
        </Route>
        <Route path="/login" exact render={() => <SignIn />} />
        <Route path="/mylist" exact render={() => <MyList films={films} />} />
        <Route path="/films/:id" exact render={({match}) => {
          const id = match.params.id;
          return <Film loadingFilm={loadingFilm} films={films} film={film} id={id} />;
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
  loadingFilm: propTypes.func.isRequired
};

const mapStateToProps = ({films, film}) => {
  return {
    films,
    film
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(loadFilmsList());
  },
  loadingFilm(payload) {
    dispatch(loadFilm(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
