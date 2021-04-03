import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {NameSpace} from '../../store/root-reducer';
import propTypes from 'prop-types';
import {setFavoriteFilm} from '../../store/api-actions';
import {AppRoute} from '../../const';

const AddToFavorite = ({id}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {authorizationStatus: auth} = useSelector((state) => state[NameSpace.USER]);
  const {favorites} = useSelector((state) => state[NameSpace.FILMS_DATA]);
  const dispatch = useDispatch();
  const history = useHistory();
  const isAddedToFavorites = favorites.length > 0 ? Boolean(favorites.find((film) => film.id === parseInt(id, 10))) : false;

  const onAddMyListHandler = () => {
    if (!auth) {
      history.push(AppRoute.LOGIN);
    }
    setIsFavorite(!isFavorite);
    dispatch(setFavoriteFilm(id, isAddedToFavorites ? 0 : 1));
  };

  useEffect(() => {
    setIsFavorite(isAddedToFavorites);
  }, [favorites]);

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={onAddMyListHandler}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

AddToFavorite.propTypes = {
  id: propTypes.number.isRequired
};

export default AddToFavorite;
