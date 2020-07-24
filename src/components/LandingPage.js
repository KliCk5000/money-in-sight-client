import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/LandingPage.css";

const wireframe = (
  <React.Fragment>
    <main role="main">
      <div role="banner" className="main-header">
        <div className="bannerText">
          <h1>Welcome to Money In Sight</h1>
          <p>
            An app that allows you to visually see how far your money will take
            you.
          </p>
          <a href={`${process.env.REACT_APP_API_URL}/auth/google`}>
            <input type="button" value="Sign in with Google" />
          </a>
        </div>
      </div>

      <section>
        <p>Have some in-sight and stop blindly spending your money.</p>
      </section>

      <section>Step 1: Add a paycheck</section>

      <section>Step 2: Add a bill</section>

      <section>Step 3: Watch how far your money goes!</section>

      <section>
        See for yourself how easy it is!
        <Link to="/login">
          <input type="button" value="Sign in with Google" />
        </Link>
      </section>
    </main>
  </React.Fragment>
);

class LandingPage extends Component {
  state = {};
  render() {
    return wireframe;
  }
}

export default LandingPage;
