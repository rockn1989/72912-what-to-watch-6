import React from 'react';
import propTypes from 'prop-types';


const GenresList = ({genre, setGenre, filterFilms, genresName}) => {

  const genres = [...genresName].map((genreName, idx) => {
    const activeGenreClass = genreName === genre ? `catalog__genres-item--active` : ``;

    return (
      <li key={`${genreName}_${idx}`} className={`catalog__genres-item ${activeGenreClass}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          setGenre(genreName);
          filterFilms();
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
  genresName: propTypes.any.isRequired,
  setGenre: propTypes.func.isRequired,
  filterFilms: propTypes.func.isRequired,
  filmsList: propTypes.array.isRequired
};

export default GenresList;
