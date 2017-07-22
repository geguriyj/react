import React from 'react'
import ReactDOM from 'react-dom';

import About from './modules/List1';
import Repos from './modules/List2';

// import { Router, Route, Link } from 'react-router'
// import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { history } from 'history';

import List1 from './modules/List1';
import List2 from './modules/List2';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
        <div className="App">
          <div className="App-header">
            <h1>App</h1>
            <ul>
              <li><Route path="/link1" component={List1} /></li>
              <li><Link to="/link2">link2</Link></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default App;