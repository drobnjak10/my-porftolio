import React, { useEffect, useMemo, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import "./icons.scss";

const Icons = () => {
  const ref = useRef();

  window.addEventListener("scroll", (e) => {
  });

  return (
    <div className="absolute" ref={ref}>
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
