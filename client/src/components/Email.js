import React from "react";
import "./email.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Email = () => {
  return (
    <div className="email">
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

export default Email;
