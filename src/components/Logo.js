import React from "react";
import logo from "../images/logo.png";
import "../stylesheets/Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img className="logo-image" alt="logo" src={logo} />
      <span className="logo-name">Money In Sight</span>
    </div>
  );
}

export default Logo;
