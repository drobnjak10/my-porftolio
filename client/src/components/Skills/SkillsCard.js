import React from "react";
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiLaravel,
  DiMongodb,
  DiMysql, DiNodejsSmall, DiReact
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import "./skills.scss";

const SkillsCard = () => {
  return (
    <div className="skills">
      {/* <h2>Skills</h2> */}
      <div className="content">
        <div className="skill">
          <div className="icon">
            <DiReact size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>React.js</h5>
            <span>Advanced</span>
          </div>
        </div>
        <div className="skill">
          <div className="icon">
            <DiNodejsSmall size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>Node.js</h5>
            <span>Advanced</span>
          </div>
        </div>
        <div className="skill">
          <div className="icon">
            <DiJavascript1 size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>JavaScript</h5>
            <span>Advanced</span>
          </div>
        </div>
        <div className="skill">
          <div className="icon">
            <SiTypescript size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>TypeScript</h5>
            <span>Experienced</span>
          </div>
        </div>
        <div className="skill">
          <div className="icon">
            <DiHtml5 size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>HTML</h5>
            <span>Intermediate</span>
          </div>
        </div>
        <div className="skill">
          <div className="icon">
            <DiCss3 size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>CSS</h5>
            <span>Advanced</span>
          </div>
        </div>
        <div className="skill">
          <div className="icon">
            <DiBootstrap size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>Bootstrap</h5>
            <span>Intermediate</span>
          </div>
        </div>

        <div className="skill">
          <div className="icon">
            <DiMongodb size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>MongoDB</h5>
            <span>Experienced</span>
          </div>
        </div>
        <div className="skill">
          <div className="icon">
            <DiLaravel size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>Laravel</h5>
            <span>Experienced</span>
          </div>
        </div>
        <div className="skill">
          <div className="icon">
            <DiMysql size={25} color={"#a3e8c9"} />
          </div>
          <div className="title">
            <h5>MySQL</h5>
            <span>Experienced</span>
          </div>
        </div>
        {/* <div className="skill">
          <h5>React</h5>
          <span>Experienced</span>
        </div>
        <div className="skill">
          <h5>HTML</h5>
          <span>Experienced</span>
        </div>
        <div className="skill">
          <h5>HTML</h5>
          <span>Experienced</span>
        </div>
        <div className="skill">
          <h5>HTML</h5>
          <span>Experienced</span>
        </div>
        <div className="skill">
          <h5>HTML</h5>
          <span>Experienced</span>
        </div> */}
      </div>
    </div>
  );
};

export default SkillsCard;
