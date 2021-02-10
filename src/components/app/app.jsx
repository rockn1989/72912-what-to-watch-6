import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Welcome from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import PageNotFound from "../page-not-found/page-not-found";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Welcome {...props} />
        </Route>
        <Route path="/login" exact render={() => <SignIn />} />
        <Route path="/mylist" exact render={() => <MyList />} />
        <Route path="/films/:id" exact render={() => <Film />} />
        <Route path="/films/:id/review" exact render={() => <AddReview />} />
        <Route path="/player/:id" exact render={() => <Player />} />
        <Route path="*" render={() => <PageNotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
