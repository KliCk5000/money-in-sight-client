import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import Footer from "./Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/main" component={MainPage} />
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
