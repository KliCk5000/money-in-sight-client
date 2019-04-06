import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './Nav';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/main" component={MainPage} />
        </Router>
      </div>
    );
  }
}

export default App;
