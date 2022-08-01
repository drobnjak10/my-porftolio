import React from "react";
import Card from "../components/Card/Card";

const Works = () => {
  return (
    <div className="section works" id="works">
      <div className="heading">
        <h2>Works</h2>
        <div className="line"></div>
      </div>
      <div className="container">
        <div className="content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Works;
