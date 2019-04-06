import React, { Component } from 'react';

const wireframe = (
  <div>
    <main role="main">
      <section>
        Google Auth or login screen
        <input
          type="button"
          onclick="location.href='/mainScreen.html';"
          value="Continue to main screen"
        />
      </section>
    </main>
    <footer role="content-info">Created by Nick Dean</footer>
  </div>
);

class LoginPage extends Component {
  state = {};
  render() {
    return wireframe;
  }
}

export default LoginPage;
