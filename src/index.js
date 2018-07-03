import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './wrappers.js'

import './index.css';

import App from './App';
import StartPage from './layouts/StartPage';
import LoginPage from './layouts/LoginPage';
import RegistrationPage from './layouts/RegistrationPage';
import WalletPage from './layouts/WalletPage';

import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}> 
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={UserIsNotAuthenticated(StartPage)} />
                <Route path="/signin" component={UserIsNotAuthenticated(LoginPage)} />
                <Route path="/create-wallet" component={UserIsNotAuthenticated(RegistrationPage)} />
                <Route path="/wallet" component={UserIsAuthenticated(WalletPage)} />
            </Route>
        </Router>
    </Provider>
    ), 
    document.getElementById('root')
);
