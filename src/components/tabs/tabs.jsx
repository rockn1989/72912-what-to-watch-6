import React from 'react';
import withTabs from '../../hocs/with-tabs';
import propTypes from 'prop-types';

const Tabs = ({tabsTitle, activeTab, handlerTabOnClick, ...props}) => {

  const tabs = tabsTitle.map((tab, idx) => {
    const isActive = idx === activeTab ? `movie-nav__item--active` : ``;
    return (
      <li key={`${tab}_${idx}`} className={`movie-nav__item ${isActive}`} onClick={(evt) => {
        evt.preventDefault();
        handlerTabOnClick(idx);
      }}>
        <a href="#" className="movie-nav__link">{tab}</a>
      </li>);
  });

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs}
        </ul>
      </nav>
      {props.children.map((child, idx) => {
        if (idx === activeTab) {
          return child;
        }
        return null;
      })}
    </>
  );
};

Tabs.propTypes = {
  tabsTitle: propTypes.array.isRequired,
  activeTab: propTypes.number.isRequired,
  handlerTabOnClick: propTypes.func.isRequired,
  children: propTypes.any
};

export default withTabs(Tabs);
