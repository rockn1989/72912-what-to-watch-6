import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from "prop-types";

const BreadCrumbs = ({id, name}) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={{pathname: `/films/${id}`}} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

BreadCrumbs.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default BreadCrumbs;
