import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import propTypes from "prop-types";

import Welcome from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import PageNotFound from "../page-not-found/page-not-found";

const App = ({films}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Welcome films={films} />
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
  films: propTypes.arrayOf(propTypes.object).isRequired
};

export default App;
