import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from "./reducers";
import requireAuth from './components/hoc/authCheck';
const AppHOC = requireAuth(App);

let middlewares = [];

middlewares.push(reduxThunk);

// apply the middleware(s)
let middleware = applyMiddleware(...middlewares);

// add redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension());
}

const createStoreWithMiddleware = middleware(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Fragment>
            <AppHOC />
        </Fragment>
    </Provider>
    , document.getElementById('root')
);

