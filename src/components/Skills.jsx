import { motion } from "framer-motion";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {SiTailwindcss,SiExpress,SiMongodb} from 'react-icons/si';
import {DiNodejs} from 'react-icons/di'
import React from "react";

const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndthree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
    five: {
      opacity: 0,
      x: "-100%",
    },
    sixAndseven: {
      opacity: 0,
      y: "100%",
    },
  };
  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="skillBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <FaJs />
          <span>javascript</span>
        </motion.div>
        <motion.div
          className="skillBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndthree}
        >
          <AiFillHtml5 />
          <span>HTML</span>
        </motion.div>
        <motion.div
          className="skillBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndthree}
          transition={{
            delay:0.15
          }}
        >
          <FaCss3Alt />
          <span>css</span>
        </motion.div>
        <motion.div
          className="skillBox8"
          whileInView={animations.whileInView}
          initial={animations.four}
      
        >
          <FaReact />
          <span>React</span>
        </motion.div>
        
        <motion.div
          className="skillBox9"
          whileInView={animations.whileInView}
          initial={animations.one}
      
        >
          <DiNodejs />
          <span>Node js</span>
        </motion.div>
          <motion.div
            className="skillBox4"
            whileInView={animations.whileInView}
            initial={animations.four}
            transition={{
              delay:0.2,
           
            }}
          >
            <SiExpress />
            <span>Express js</span>
          </motion.div>
        <motion.div
          className="skillBox5"
          whileInView={animations.whileInView}
          initial={animations.one}
          transition={{
            delay:0.2,
         
          }}
        >
          <SiMongodb />
          <span>Mongo DB</span>
        </motion.div>

        <motion.div
          className="skillBox6"
          whileInView={animations.whileInView}
          initial={animations.sixAndseven}
        >
          < SiTailwindcss/>
          <span>Tailwind CSS</span>
        </motion.div>
        <motion.div
          className="skillBox7"
          whileInView={animations.whileInView}
          initial={animations.sixAndseven}
          transition={{
            delay:0.15
          }}
        >
          <AiFillGithub />
          <span>git</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
