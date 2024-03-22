import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Resume.scss";
import { saveAs } from "file-saver";


const Resume = () => {

  const handleClick = () => {
    let url = "http://links.mailer.resume-now.com/u/click?_t=49d9a262835845f3a348b9e977aa9132&_m=ef8b885f5f374c0f8504c768fcc03e8e&_e=gXSXQXovzf761WhKu-YUQZ3INZxLMTbbD-px4MSrv_UMGh_WhS1BfrHZPdsOozj3Q0dQR8ASaw8QriyMOJYEWv7NN9D0ShUr_rThfGV2NrIfI2xIvFPugnzNIEsHpVvhuexkdsFiyybRfyEBcRFUdxS41mEuYS1zOXb0NVug004nXjnBrQtr6jVtQscDGtfBAbPXCX_wPbWSFkJXJ6xzr5ytzFOyGIcDGFhw2xzb4pL4epaK6Ier2153BTh-e8v45FQmAYrXNu4DRzpTBULbY7a2nG2pacrY5CCSaDvTM5fhU9wEwltEQFVAUlDpe8lo4UrVQOlI67Im1EK8rjvceUOV4X_fzEeXiB7Hyrd5VqhT8o7nsgUbmVCH22J0tECGaE0CBfgVHZ_6O70l0tjPpMeyG2KkOg2Ryevx5CLdMWg8GZAD2WwRKCVgefd_G-0x87pbw8H73TgcwHHWXzoM9d2zkMaGZcXZuj-q5V1FGYlHvjRb7IYpZxj7S5TS6RsDkNH_yJiF70wx1XvcbGe75LEc-MU7cjS1DePcyyEKlVKlb9gEGk4ZXyP2ShqcBNArK3-2gp2jLVDx4lqzgkSHZNGkZJbtXzSlp3UAvOWEASbVDCKeAU_coxAdCEpWvpYflnCBcFsYysb5BBzFCIWdkBFpn4LCN-2aNndhqFkdmtPR4FvcpksffeP1CBmdb3RhSzvoKfwH80vb12aOVTynoXjqcG1dAiQ4RTX_rPsVIAVLkiAWDd3FmvkOh5d-83LXrB32Wn_Roey15HKm6uT0vw%3D%3D";
    saveAs(url, "Mohamed_Ebraheem-resume");
  };

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
            <span>Thrive in dynamic environments</span>,  fueled by a relentless pursuit of excellence and meticulous attention to detail. My proactive approach, exceptional problem-solving skills, and collaborative spirit ensure I can deliver immediate and impactful results from day one. My demonstrated ability to learn new technologies quickly and apply them to build user-centric and efficient full-stack applications showcases my potential to drive innovation and continuously learn. Possessing a growth mindset, I'm eager to find an internship opportunity that allows me to push boundaries and employ a forward-thinking approach within a collaborative and supportive team environment.
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
              <a  className="p-text" href="#contact" >
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

              <a  className="p-text" onClick={handleClick}>
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
