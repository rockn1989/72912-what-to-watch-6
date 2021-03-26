import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './api';
import {authorizationAction} from './store/action';
import {redirect} from './store/redirect';

const onUnauthorized = () => {
  store.dispatch(authorizationAction(false));
};

const api = createAPI(onUnauthorized);

const store = createStore(rootReducer,
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
