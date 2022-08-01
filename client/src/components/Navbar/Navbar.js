import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  console.log(isOpen)
  return (
    <div className="navbar">
      <div className={`navbar-wrapp ${isOpen && 'active'}`}>
        <div className="logo">
          <h3>David.</h3>
          <div className="menu">
            <label for="check">
              <input type="checkbox" id="check" onClick={() => setIsOpen(!isOpen)}/>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
        <div className={`links`}>
          <div className="link">
            <a href="#home">Home</a>
          </div>
          <div className="link">
            <a href="#about">About</a>
          </div>
          <div className="link">
            <a href="#experience">Skills</a>
          </div>
          <div className="link">
            <a href="#works">Works</a>
          </div>
          <div className="link">
            <a href="#contact">Contact</a>
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
