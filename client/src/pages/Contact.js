import React from "react";

const Contact = () => {
  return (
    <div className="section contact" id="contact">
      <div className="left">
        <div className="content">
          <div className="heading">
            <h2>Get In Touch</h2>
            <div className="line"></div>
          </div>
          <p>Want to work together or have any questions?</p>
          <a href="#" className="btn">
            Say Hello
          </a>
        </div>
      </div>
      <div className="right">
        <img src="/images/call-bg.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;
