

import React, { useEffect } from "react";
import './About.css';
import { motion } from "framer-motion";
import aboutImage from '../../assets/profile.png';



const About = () => {
  return (
    <div className="about-container">
    <div className="about-section">
      <motion.h2 className="about-title"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        ABOUT
      </motion.h2>

      <div
        className="about-box">
        <motion.p initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}>
          Hello! I'm a web developer with a good grasp of JavaScript and hands-on experience in
          popular frameworks like Node.js, React, and Express.
          My technical skills are complemented by a keen eye for design, thanks to my proficiency
          in creativity, which allows me to craft intuitive and visually appealing user interfaces.
          As a good learner, I am always eager to embrace new challenges and technologies. I am
          always on the lookout for opportunities to expand my knowledge and stay updated with the
          latest industry trends.
        </motion.p>
      </div>
      </div>
      <div className="about-right-image">
        <motion.img src={aboutImage} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }} alt="About Me" />
      </div>
    </div>
  );
};

export default About;
