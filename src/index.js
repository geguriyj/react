import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import List1 from './modules/List1';
import List2 from './modules/List2';

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="/link1" component={List1} />
            <Route path="/link2" component={List2} />
        </Route>
    </Router>, document.getElementById('root'));

registerServiceWorker();
