import React from 'react';
import {Switch, Route} from 'react-router-dom';
import propTypes from 'prop-types';


import Welcome from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';

import {connect} from 'react-redux';

import {setGenreAction, showMoreAction, setFilmsCounterAction} from '../../store/action';
import {loadFilm, sendComment} from '../../store/api-actions';

import {getFilmGenre, getGenresList, getFiltredFilmsByCounter, getPromoFilm, getCurrentCounter} from '../../store/films-data/selectors';
import {getFilm} from '../../store/film-data/selectors';
import {getFormStatus} from '../../store/form-status/selectors';
import {getErrorStatus} from '../../store/error-status/selectors';

import {AppRoute} from '../../const';

const App = ({
  film,
  onLoadingFilm,
  onSendUserComment,
  formStatus,
  error,

  genre,
  genresList,
  filtredFilms,
  currentCounter,
  promo,
  setFilmsCounter,
  setGenre,
  showMore
}) => {

  return (
    <Switch>
      <Route path={AppRoute.MAIN} exact render={() => {
        return <Welcome
          filtredFilms={filtredFilms}
          genre={genre}
          genresList={genresList}
          currentCounter={currentCounter}
          promo={promo}
          setFilmsCounter={setFilmsCounter}
          setGenre={setGenre}
          showMore={showMore}
        />;
      }}>
      </Route>

      <Route path={AppRoute.LOGIN} exact render={() => <SignIn />} />

      <Route path={AppRoute.MY_LIST} exact render={() => <MyList />} />

      <Route path={AppRoute.FILM} exact render={() => {
        return <Film onLoadingFilm={onLoadingFilm} />;
      }} />

      <PrivateRoute path={AppRoute.REVIEW} exact component={() => {
        return <AddReview onSendUserComment={onSendUserComment}
          error={error}
          film={film}
          formStatus={formStatus}
        />;
      }
      }/>

      <Route path={AppRoute.PLAYER} exact render={({match}) => {
        const id = match.params.id;
        return <Player onLoadingFilm={onLoadingFilm} film={film} id={id} />;
      }} />

      <Route path="*" render={() => <PageNotFound />} />
    </Switch>
  );
};


App.propTypes = {
  film: propTypes.object.isRequired,
  onLoadingFilm: propTypes.func.isRequired,
  onSendUserComment: propTypes.func.isRequired,
  formStatus: propTypes.bool.isRequired,
  error: propTypes.bool.isRequired,

  genre: propTypes.string.isRequired,
  genresList: propTypes.object.isRequired,
  filtredFilms: propTypes.arrayOf(propTypes.object).isRequired,
  currentCounter: propTypes.object.isRequired,
  promo: propTypes.object,
  setFilmsCounter: propTypes.func.isRequired,
  setGenre: propTypes.func.isRequired,
  showMore: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    film: getFilm(state),
    formStatus: getFormStatus(state),
    error: getErrorStatus(state),

    genre: getFilmGenre(state),
    genresList: getGenresList(state),
    filtredFilms: getFiltredFilmsByCounter(state),
    currentCounter: getCurrentCounter(state),
    promo: getPromoFilm(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadingFilm(payload) {
    dispatch(loadFilm(payload));
  },
  onSendUserComment(payload) {
    dispatch(sendComment(payload));
  },

  setGenre(payload) {
    dispatch(setGenreAction(payload));
  },
  showMore() {
    dispatch(showMoreAction());
  },
  setFilmsCounter(payload) {
    dispatch(setFilmsCounterAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
