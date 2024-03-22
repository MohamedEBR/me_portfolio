import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Resume.scss";
import { saveAs } from "file-saver";


const Resume = () => {

  const handleClick = () => {
    let url = "http://links.mailer.resume-now.com/u/click?_t=49d9a262835845f3a348b9e977aa9132&_m=b9116ffa97ce42898a4af9ce2646b10a&_e=icaktfJrn-3DutN52iforD23x1ceQnuN4idg7TAbXuOipCqcCQrx3cTv3P9HL7otWh29oEFicsG8oICypGev_xIVFQJRj1_HBTHu5hup1SWd-W-38QWb5AGrvNyPz-AS6fRRk59t4g2HCXdpsHAYnm1tPWeE7BeQCtOLRevaWu8Zo_KfRb3AgbXE8WN0eurXjo-2iypq8x9qWyBOylIAmZw2soyYlN-hdA2hMW0QREDtooQRDa262-KuXkuojXtrJ9aqm4sHjmDDWDTaX-aIeA0xSF7_NLpHjJlH2lZSRAZDtZfyjBFSK-RjQZlr38fl3Qtc2vbtrx1UZwoTznBIepVoDHf9sUzGYKqLsg-ryHI1HXUKdWoe5shMme49mpCJMB1HHb4wXuyrUzZmWNDyEEvW0d9LlJLBGsVAgZmkTSh_8mh2sTUBPIiWi6k6YXfcXnU6-wbqGJAPo7SP-c81Qx_ky94UjC1tnIup4x6IEK6M2nF5epX2GUEO0kcp1L2f_t2lCXrdfl3yAJXsw4SqeDKzV-FnVIegfKIt_sPpIq1xqmjng5ESsV-TA8VphYstsUzKqSHBRhFkdrBbfcuqzhGYUEDaBEHzIqFZuU8ydFmj9YSYZIQ9imzV3SmogBEQGza-ddUlswAWnYm7UybNXMozvDr6fqwYXjHX_ud4RkHtYKAWTh1ggGNUlJRRO1xpDI7odJZm6MRqKzLiqn9aZO6RwfYiKWcxHc4k2S8aWRdY7s3vqaNEG0cqaF5crK_dUHrEsSMzNUFJEtyoMnAQVA%3D%3D";
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
