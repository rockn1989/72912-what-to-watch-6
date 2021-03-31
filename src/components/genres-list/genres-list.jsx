import React from 'react';
import propTypes from 'prop-types';


const GenresList = ({genre, setGenre, genresList}) => {

  const genres = [...genresList].map((genreName, idx) => {
    const activeGenreClass = genreName === genre ? `catalog__genres-item--active` : ``;

    return (
      <li key={`${genreName}_${idx}`} className={`catalog__genres-item ${activeGenreClass}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          setGenre(genreName);
        }}>
          {genreName}
        </a>
      </li>
    );
  });

  return (
    <ul className="catalog__genres-list">
      {genres}
    </ul>
  );
};

GenresList.propTypes = {
  genre: propTypes.string.isRequired,
  genresList: propTypes.any.isRequired,
  setGenre: propTypes.func.isRequired
};

export default GenresList;
