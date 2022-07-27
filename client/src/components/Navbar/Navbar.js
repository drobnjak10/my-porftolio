import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapp">
        <div className="logo">
          <h3>David.</h3>
        </div>
        <div className="links">
          <div className="link">
            <a href="#">Home</a>
          </div>
          <div className="link">
            <a href="#">About</a>
          </div>
          <div className="link">
            <a href="#">Skills</a>
          </div>
          <div className="link">
            <a href="#">Projects</a>
          </div>
          <div className="link">
            <a href="#">Contact</a>
          </div>
          <div className="link resume">
            <a href="#">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
