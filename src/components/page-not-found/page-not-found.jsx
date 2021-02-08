import React from "react";
import {Link} from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Страница не найдена</h1>
      <Link to="/">Перейдите на главную</Link>
    </div>
  );
};

export default PageNotFound;
