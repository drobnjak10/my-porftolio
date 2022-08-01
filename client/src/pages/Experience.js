import React, { useRef, useState } from "react";
import ExperienceTab from "../components/ExperienceTab";
import SkillsCard from "../components/Skills/SkillsCard";
import { jobsData } from "../data";
import { useIsInViewport } from "../hooks/useInViewport";

const Experience = () => {
  const [current, setCurrent] = useState(0);
  const jobs = jobsData;
  const companies = jobsData.map((job) => job.companyName);
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);

  const handlerChangeTab = (e) => {
    setCurrent(e.currentTarget.tabIndex);
  };

  return (
    <div className={`section experience  ${isInViewport && "active"}`} id="experience">
      <div className="heading">
        <h2>Skills & Experience</h2>
        <div className="line"></div>
      </div>
      <div className={`container`} ref={ref}>
        <SkillsCard />
        <div className="wrapp">
          {/* <h2>Experience</h2> */}
          <div className="body">
            <div className="tabs">
              {companies.map((company, index) => (
                <div
                  className={`tab ${index === current && "active"}`}
                  onClick={handlerChangeTab}
                  tabIndex={index}
                >
                  {company}
                </div>
              ))}
            </div>
            <div className="content">
              {jobs.length > 0 &&
                jobs.map((job, index) => (
                  <ExperienceTab current={current} tabIndex={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
