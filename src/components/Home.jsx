import React from "react";
import { motion,  } from "framer-motion";
import Typerwriter from "typewriter-effect";
import samshad from '../assets/samshad.png'
import resume from '../assets/resume.pdf'
const Home = () => {
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I am <br /> <span>Samshad Ali</span>
          </motion.h1>
          <Typerwriter
            options={{
              strings: ["A Full Stack Developer","Aspiring MERN Stack ","An Enthusiastic Dev","A Learner"],
              autoStart: true,
              loop: true,
                          wrapperClassName: "typerwriterpara",
             cursor:''             
            }}
          />
          <div>
            <a href="mailto:sam606166@gmail.com">Hire Me</a>
            <a href={resume} download>
            Resume
            </a>
            
          </div>
        </div>
      </section>
          <section>
              <div>
              <img src={samshad} alt="Samshad" />
              </div>
      </section>
    </div>
  );
};

export default Home;
