import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { Router, Route, Link, useRouterHistory } from 'react-router';
import { createBrowserHistory } from 'history'
// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom';
import About from './modules/List1'
import Repos from './modules/List2'

ReactDOM.render((
    <Router history={createBrowserHistory}>
        <Route path="/" component={App}>
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('root'));
// registerServiceWorker();
