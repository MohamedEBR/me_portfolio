import React, { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

import Lottie from "react-lottie";
import coding from "./codingAnimation.json";

import { AppWrap, MotionWrap } from "../../wrapper";
import { BackgroundWrap } from "../../constants/BackgroundWrap";
import { images } from "../../constants";

import "./AboutMe.scss";
let background;
const AboutMe = () => {
  const codingAnimation = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  // const vantaRef = useRef(null);

  // const [vantaEffect, setVantaEffect] = useState(0);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       WAVES({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0xffffff,
  //         shininess: 12.0,
  //         waveHeight: 25.0,
  //         waveSpeed: 0.55,
  //         zoom: 0.65,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <>
      <div className="app__info" >
        <div >
          <hr className="pill" />
          <h3>Who is Mohamed?</h3>
          <p className="p-text">
            Hello! I'm Mohamed Ebraheem, an 18-year-old high schooler on the
            cusp of university. For me, coding is more than just a hobby; it's a
            passion. I'm a firm believer in the transformative influence of
            technology, and my sights are set on making a sizable dent in the
            tech universe. I started out by helping my high school's Computer
            Science Club and Data Science Club deepen their understanding of the
            principles of code and techniques for analyzing data, and I've been
            searching for even more ways to combine my creative and analytically
            precise brains to innovate and solve some of the many real-world
            problems with their very own unique and exciting coding solutions.
          </p>
        </div>
        {/* <hr  className="dots"/> */}
        <div className="floating-img">
          <Lottie options={codingAnimation}  />
        </div>

        <div className="floating-img ">
          <img src={images.kick} alt="kick" />
        </div>
        <div>
          <hr className="pill" />
          <h3>Hobbies and Interest</h3>
          <p className="p-text">
            When I'm not busy coding, you can find me running around on some
            sort of sporting field, making sure that I'm stick to the saying "a
            healthy body harbors a healthy mind." Sports, along with
            weightlifting, help me keep my brain sharp and practice to perfect
            my problem-solving techniques, like in my karate, where I've won a
            number of provincial and national tournaments. Staying active to
            make sure my growth-focused approach with each new coding project is
            ready and raring to go from the get-go.
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(AboutMe, "app__about-me"),
  "about-me",
  "app__whitebg"
);
