import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const wireframe = (
  <div>
    <main role="main">
      <section>
        Google Auth or login screen
        <Link to="/main">
          <input
            type="button"
            value="Continue to main screen"
          />
        </Link>
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
