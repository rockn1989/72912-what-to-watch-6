import React, {useState} from 'react';
import propTypes from 'prop-types';
import {MAX_FILMS} from '../../const';
import Card from '../card';

const CardList = ({filmsList, currentGenre}) => {
  const {counter} = {...currentGenre};
  const [activeCard, setActiveCard] = useState(null);

  const films = filmsList.slice(0, (counter + 1) * MAX_FILMS);

  const onHoverHandler = (id) => {
    setActiveCard(id);
  };

  const cards = films.map(({name, id, posterImage, previewVideolink}, idx) => {
    const isActive = id === activeCard;
    return <Card key={`${name}_${idx}`} onHoverHandler={onHoverHandler} id={id} img={posterImage} previewVideolink={previewVideolink} title={name} isActive={isActive} />;
  });

  return cards;
};

CardList.propTypes = {
  filmsList: propTypes.arrayOf(propTypes.object).isRequired
};

export default CardList;
