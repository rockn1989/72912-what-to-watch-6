import React, {useState} from 'react';
import propTypes from 'prop-types';

import Card from '../card';

const CardList = ({filmsList}) => {
  const [activeCard, setActiveCard] = useState(null);

  const onHoverHandler = React.useCallback((id) => {
    setActiveCard(id);
  }, [activeCard]);


  const cards = filmsList.map(({name, id, poster_image: posterImage, video_link: previewVideolink}, idx) => {
    const isActive = id === activeCard;
    return <Card key={`${name}_${idx}`} onHoverHandler={onHoverHandler} id={id} img={posterImage} previewVideolink={previewVideolink} title={name} isActive={isActive} />;
  });

  return cards;
};

CardList.propTypes = {
  filmsList: propTypes.arrayOf(propTypes.object).isRequired
};

export default React.memo(CardList);
