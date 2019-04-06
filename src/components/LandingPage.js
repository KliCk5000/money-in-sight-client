import React, { Component } from 'react';

const wireframe = (
  <div>
    <main role="main">
      <header role="banner">
        <h1>Money In Sight</h1>
        <p>
          An app that allows you to visually see how far your money will take
          you.
        </p>
      </header>

      <section>
        <p>Have some in-sight and stop blindly spending your money.</p>
        <input
          type="button"
          onclick="location.href='/login.html';"
          value="Sign in with Google"
        />
      </section>

      <section>Step 1: Add a paycheck</section>

      <section>Step 2: Add a bill</section>

      <section>Step 3: Watch how far your money goes!</section>

      <section>
        See for yourself how easy it is!
        <input
          type="button"
          onclick="location.href='/login.html';"
          value="Sign in with Google"
        />
      </section>
    </main>
    <footer role="content-info">Created by Nick Dean</footer>
  </div>
);

class LandingPage extends Component {
  state = {};
  render() {
    return wireframe;
  }
}

export default LandingPage;
