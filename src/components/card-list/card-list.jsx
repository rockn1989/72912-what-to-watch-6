import React, {useState} from 'react';
import propTypes from 'prop-types';

import Card from '../card';

const CardList = ({filmsList}) => {

  const [activeCard, setActiveCard] = useState();

  const films = filmsList.slice(0, 8);

  const onHoverHandler = (id) => {
    setActiveCard(id);
  };

  const cards = films.map((card, idx) => {
    return <Card key={`${card.name}_${idx}`} onHoverHandler={onHoverHandler} id={card.id} img={card.posterImage} title={card.name} isActive={card.id === activeCard ? true : false} />;
  });

  return cards;
};

CardList.propTypes = {
  filmsList: propTypes.arrayOf(propTypes.object).isRequired
};

export default CardList;
