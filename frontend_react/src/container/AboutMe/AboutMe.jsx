import React from "react";


import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import Uoft from '../../assets/UofT.png'
import "./AboutMe.scss";
const AboutMe = () => {



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
          Hello! I'm Mohamed Ebraheem, a passionate eighteen-year-old Computer Science student at the University of Toronto. With a deep-rooted love for coding and a strong belief in technology's potential to transform lives, I'm excited to embark on my academic journey.

My experience leading my high school's Computer Science and Data Science clubs has honed my ability to communicate complex technical concepts to a diverse audience. I thrive in collaborative environments and possess a strong problem-solving mindset. I'm eager to apply my skills to innovative projects and contribute to the development of cutting-edge solutions.
          </p>
        </div>
        {/* <hr  className="dots"/> */}
        
        <div className="floating-img">
        <img src={Uoft} alt="kick" />
        </div>

        <div className="floating-img ">
          <img src={images.kick} alt="kick" />
        </div>
        <div>
          <hr className="pill" />
          <h3>Hobbies and Interest</h3>
          <p className="p-text">
          Beyond coding, I'm passionate about staying active and healthy, both physically and mentally. Whether I'm on the sporting field or lifting weights, I find that physical activity keeps my mind sharp and hones my problem-solving skills. This dedication to well-being extends to my karate practice, where I've competed and won at both provincial and national tournaments, including the Ontario Karate Federation Elite Tournaments (2020-2024) and the Canada Karate Nationals (2023, Laval, Montreal). Maintaining an active lifestyle ensures that I approach each new coding project with a growth mindset and relentless drive to succeed.
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
