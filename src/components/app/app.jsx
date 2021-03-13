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

import {connect} from 'react-redux';
import {loadFilmsList} from "../../store/api-actions";

const App = ({films, loadFilms}) => {

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({location}) => {
          return <Welcome filmsList={films} location={location} />;
        }}>
        </Route>
        <Route path="/login" exact render={() => <SignIn />} />
        <Route path="/mylist" exact render={() => <MyList films={films} />} />
        <Route path="/films/:id" exact render={({match}) => {
          const id = match.params.id;
          return <Film films={films} id={id} />;
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
  loadFilms: propTypes.func.isRequired
};

const mapStateToProps = ({films}) => {
  return {
    films
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(loadFilmsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
