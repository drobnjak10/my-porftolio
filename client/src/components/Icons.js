import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import "./icons.scss";

const Icons = () => {
  return (
    <div className="absolute">
      <div className="icons">
        <div className="icon">
          <RiGithubLine size={25} />
        </div>
        <div className="icon">
          <AiFillLinkedin size={25} />
        </div>
        <div className="icon">
          <AiFillLinkedin size={25} />
        </div>
        <div className="icon">
          <AiFillLinkedin size={25} />{" "}
        </div>
        <div className="icon">
          <RiLinkedinLine size={25} />{" "}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Icons;
