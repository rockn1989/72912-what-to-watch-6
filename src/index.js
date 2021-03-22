import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './api';
import {ActionCreator} from './store/action';
import {redirect} from './store/redirect';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.authorization(false));
};


const api = createAPI(onUnauthorized);

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
