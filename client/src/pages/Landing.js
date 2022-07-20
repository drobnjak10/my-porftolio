import React, { useRef } from "react";
import { useIsInViewport } from "../hooks/useInViewport";

const Landing = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <div className="section landing">
      <div className={`content ${isInViewport && "active"} `} ref={ref}>
        <span>Hello Friend, I'm</span>
        <h1>David Drobnjak</h1>
        <h3>Full Stack Web Developer</h3>
        <a href="#" className="btn">
          Get Started
        </a>
      </div>

      <div className="image">
        <img src="/vector.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;
