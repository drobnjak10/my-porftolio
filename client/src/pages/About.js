import React, { useRef } from "react";
import Typed from "react-typed";
import { useIsInViewport } from "../hooks/useInViewport";

const About = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);

  console.log("custom about", isInViewport);

  return (
    <div className={`section about ${isInViewport && "active"} `} ref={ref} id="about">
      <div className="left">
        <img src="/about.jpg" alt="" />
      </div>
      <div className="right">
        <div className="content">
          <h3>About</h3>
          <h1>
            <Typed
              strings={["JavaScript Developer", "Freelancer", "Designer"]}
              typeSpeed={120}
              backSpeed={50}
              loop
              backDelay={3000}
            />
          </h1>
          <p>
            I'm Lokkee, a passionate freelancer bringing you programming and
            design from the future. I am experienced in developing web and
            desktop applications including full front end design. This includes
            brand identity, graphics and illustrations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
