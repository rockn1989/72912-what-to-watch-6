import React, {useState} from 'react';
import propTypes from 'prop-types';

import Card from '../card';

const CardList = ({filmsList}) => {

  const [activeCard, setActiveCard] = useState();

  const films = filmsList.slice(0, 8);

  const onHoverHandler = (id) => {
    setActiveCard(id);
  };

  const cards = films.map(({name, id, posterImage}, idx) => {
    const isActive = id === activeCard ? true : false;
    return <Card key={`${name}_${idx}`} onHoverHandler={onHoverHandler} id={id} img={posterImage} title={name} isActive={isActive} />;
  });

  return cards;
};

CardList.propTypes = {
  filmsList: propTypes.arrayOf(propTypes.object).isRequired
};

export default CardList;
