import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";

const data = {
  title: `The Grand Budapest Hotel`,
  gener: `Drama`,
  date: 2014,
};

ReactDOM.render(<App {...data} />, document.querySelector(`#root`));
