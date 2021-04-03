import React, {useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {NameSpace} from '../../store/root-reducer';
import {useSelector} from 'react-redux';
import propTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardList from '../card-list/card-list';
import Tabs from '../tabs/tabs';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import reviews from '../../mocks/reviews';
import {adapterFilmData} from '../../service/adapters';
import Preloader from '../preloader/preloader';
import {AppRoute} from '../../const';

const tabsTitle = [`Overview`, `Details`, `Reviews`];

const Film = ({onLoadingFilm}) => {
  const history = useHistory();
  const {id} = useParams();
  const {film} = useSelector((state) => state[NameSpace.FILM_DATA]);
  const {films} = useSelector((state) => state[NameSpace.FILMS_DATA]);
  const {authorizationStatus: auth} = useSelector((state) => state[NameSpace.USER]);

  useEffect(() => {
    onLoadingFilm(id);
  }, [id]);

  if (Object.keys(film).length === 0) {
    return <Preloader />;
  }

  const {name, genre, realeased, posterImage, backgroundImage, backgroundColor} = adapterFilmData(film);
  const similarMovies = films.filter((filmInfo) => filmInfo.genre === genre);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={backgroundImage}
              alt={name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={`movie-card__head`}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{realeased}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={() => {
                    history.push(`/player/${id}`);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => {
                    history.push(AppRoute.MY_LIST);
                  }}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {auth && <Link to={{pathname: `/films/${id}/review`}} className="btn movie-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={posterImage}
                alt={name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <Tabs tabsTitle={tabsTitle} {...film}>
                <Overview film={film}/>
                <Details film={film}/>
                <Reviews reviews={reviews}/>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <CardList filmsList={similarMovies} />
          </div>
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  onLoadingFilm: propTypes.func.isRequired,
};


export default Film;
