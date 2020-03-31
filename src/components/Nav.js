import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Landing Page</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/main">Main Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
