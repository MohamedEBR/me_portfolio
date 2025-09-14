import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Resume.scss";
import resumePdf from "../../assets/ME_Resume.pdf";

const Resume = () => {


  return (
    <>
      <div className="app__profiles">
        <div>
          <hr className="pill" />
          <h3 className="head-text">
            <span>Quality</span> grows with each task, <br />
            <span>Elevating Excellence</span> in every step you take.
          </h3>
          <div className="app__resume-suit">
            <img src={images.suit} alt="suit" />
          </div>
        </div>
        <div>
          <hr className="pill" />
          <p className="p-text">
            <span>Thrive in dynamic environments</span>, fueled by a relentless
            pursuit of excellence and meticulous attention to detail. My
            proactive approach, exceptional problem-solving skills, and
            collaborative spirit ensure I can deliver immediate and impactful
            results from day one. My demonstrated ability to learn new
            technologies quickly and apply them to build user-centric and
            efficient full-stack applications showcases my potential to drive
            innovation and continuously learn. Possessing a growth mindset, I'm
            eager to find an internship opportunity that allows me to push
            boundaries and employ a forward-thinking approach within a
            collaborative and supportive team environment.
          </p>

          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <a
                href="https://www.flaticon.com/free-icons/professional"
                title="professional icons"
                alt="Professional icons created by Freepik - Flaticon"
              >
                <img src={images.businessman} alt="hire" />
              </a>
              <a className="p-text" href="#contact">
                Hire Me
              </a>
            </div>
            <div className="app__footer-card">
              <a
                href="https://www.flaticon.com/free-icons/cv"
                title="CV icons"
                alt="CV icons created by Good Ware - Flaticon"
              >
                <img src={images.cv} alt="cv" />
              </a>

              <a
                className="p-text"
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Resume, "app__resume"),
  "resume",
  "app__whitebg"
);
