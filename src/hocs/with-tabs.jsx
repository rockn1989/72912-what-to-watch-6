import React, {useState} from 'react';
import propTypes from 'prop-types';

const withTabs = (Component) => {
  const withTabsWrapper = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const handlerTabOnClick = (tab) => {
      setActiveTab(tab);
    };

    return (
      <Component handlerTabOnClick={handlerTabOnClick} activeTab={activeTab} {...props}/>
    );
  };
  return withTabsWrapper;
};


withTabs.propTypes = {
  Component: propTypes.any.isRequired,
};

export default withTabs;

