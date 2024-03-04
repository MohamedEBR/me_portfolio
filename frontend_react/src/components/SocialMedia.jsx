import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/mohamed-ebraheem-294541240/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/momo.k.champ/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
