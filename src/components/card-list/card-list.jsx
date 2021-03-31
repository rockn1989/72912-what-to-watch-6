import React, {useState} from 'react';
import propTypes from 'prop-types';

import Card from '../card';
import {adapterFilmData} from '../../service/adapters';

const CardList = ({filmsList}) => {
  const [activeCard, setActiveCard] = useState(null);

  const onHoverHandler = React.useCallback((id) => {
    setActiveCard(id);
  }, [activeCard]);

  const cards = filmsList.map((film, idx) => {
    const {name, id, posterImage, previewVideoLink} = adapterFilmData(film);
    const isActive = id === activeCard;

    return <Card key={`${name}_${idx}`} onHoverHandler={onHoverHandler} id={id} img={posterImage} previewVideolink={previewVideoLink} title={name} isActive={isActive} />;
  });

  return cards;
};

CardList.propTypes = {
  filmsList: propTypes.arrayOf(propTypes.object).isRequired
};

export default React.memo(CardList);
