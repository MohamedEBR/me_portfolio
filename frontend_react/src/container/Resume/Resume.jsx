import React, { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Resume.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const About = () => {
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
            <span>I excel in fast-paced settings</span>, driven by a commitment
            to excellence and a detail-oriented mindset. My strong initiative,
            ability to solve problems independently, and team collaboration
            skills enable me to contribute significantly from the start.
            Passionate about innovation and learning, I seek roles that offer
            growth and creativity, requiring a forward-thinking approach.
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
              <a  className="p-text" href="#contact">
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

              <a  className="p-text">
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
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
