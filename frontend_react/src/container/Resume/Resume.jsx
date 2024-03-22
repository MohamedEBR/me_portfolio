import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Resume.scss";
import { saveAs } from "file-saver";


const Resume = () => {

  const handleClick = () => {
    let url = "http://links.mailer.resume-now.com/u/click?_t=49d9a262835845f3a348b9e977aa9132&_m=e0c4d73ebb684257ac35ca7e333ea4a6&_e=qqWGBQ_ZOoo4p6RdF0QuHzzzcMmxxZortj-UfjEBcrNTnDzESNSBhFeot4-GzzC8BmTSjmlpyWA56AcWt0D1WQ6NQx6uqlEmtrlfQ-rn_e2BNFDit94CoZ2pfN6NO1finM79RKMh22wFRPhe_R-OwsmE9Hbx0iaTgq_KzqyohnIRgG999-AOEjr7WJGMSYH9TeoPciQRhEeNmLWYsHdJ1Ua52LsYfL_8nxj1sVPERyJIoAtq-Csabofwxt3pxxQoisXThmNUdOyRKe_QLwxZmvwT3NFpzfTmwgSIA8qJfISP5zc8O7kGpDIcdOybUDAIp2QKcgbZrS-6zo9h4jDb93vhQvRwHueQBP95WjR-ZrejYy13DAE5P3w469hLRrQWpA399slfmlDJ9bZ3BkX6F7GIUUGlmHyGi_h-CHR-v6STxVDFnxRiYvqecynOozC8x9RaBOzRWM04rygpE37XhsxhYgC67kTpp8tH_xgvpc-KEHnpz6umikzheWpNCpTOe3dymwPx9dAFfonUEUS-ctLUXRWW1DxbTMsakrHCtwwvVJAsZugF0fJw7g70OmKeb_v1i_pEuHtTwekhmYvc2tjOn58pdBdCTpi_ay7XIQ_nLoyW6gliwSFiDws8THaGY-aCM4LLLPl3v4vMIVL20BqvW8YtNMGCcaarLXSzSDTTqnTw-vSfehGnKmsP3K1OeQ-Flzq9q9gUGrpcfs7zhfCuZE__QQTcJdRjI3SoU-L0MzBLimt2vA7EQAtLPO2ERKAXa6t_88e2rRL-89h77Q%3D%3D";
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
