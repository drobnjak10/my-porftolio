import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { jobsData } from "../data";

const ExperienceTab = ({ current, tabIndex, job }) => {
  return (
    <div style={{ display: `${current === tabIndex ? "block" : "none"}` }} className='experience-card'>
      <h4 className="title">
        {job.title} <span>@ {job.companyName}</span>{" "}
      </h4>
      <span style={{ color: "#fff", margin: "5px 0" }}>{job.contract}</span>{" "}
      <br />
      <span className="date">
        {job.startDate} - {job.endDate}
      </span>
      <div className="lines">
        <div className="line">
          <span className="icon">
            <BsArrowRightShort size={30} color={"#a3e8c9"} />
          </span>
          <div className="desc">
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </div>
        </div>
        <div className="line">
          <span className="icon">
            <BsArrowRightShort size={30} color={"#a3e8c9"} />
          </span>
          <div className="desc">
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript,
            Gatsby, React, Craft, WordPress, Prismic, and Netlify
          </div>
        </div>
        <div className="line">
          <span className="icon">
            <BsArrowRightShort size={30} color={"#a3e8c9"} />
          </span>
          <div className="desc">
            Communicate with multi-disciplinary teams of engineers, designers,
            producers, and clients on a daily basis
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
